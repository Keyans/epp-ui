import lodash from 'lodash';

/**
 * api配置触发器
 * @param {object} apiConfig - api配置
 * @param {object} vueContext - vue实例
 * @example
 *
 */
class ApiConfigTrigger {
  constructor(apiConfig, vueContext) {
    this.apiConfig = apiConfig;
    this.vueContext = vueContext;
  }

  // 发送请求
  sendApi() {
    // 检查配置字段
    const checkConfig = this.hasProperty(this.apiConfig, 'submitFormApi', ['apiPath']);
    if (!checkConfig) {
      return Promise.reject(false);
    }


    const reqApiConfig = lodash.cloneDeep(this.apiConfig);
    // 设置了请求配置
    if (this.apiConfig.requestConfig) {
      // 生成字段映射配置
      const fieldMappingConfig = this.getFieldMappingConfig({
        dataObj: this.vueContext,
        isApiData: false,
      });

      // 得到新的数据模型
      let reqData = this.fieldMapping(fieldMappingConfig);

      // 所有请求字段后处理
      const { transformRequest } = this.apiConfig.requestConfig;
      if (lodash.isFunction(transformRequest)) {
        const newRequest = transformRequest(reqData, this.vueContext.$data);

        if (lodash.isObject(newRequest)) {
          reqData = newRequest;
        } else {
          throw '请在 transformRequest 方法中返回一个对象';
        }
      }

      // 组合请求数据（默认请求数据 + 表单数据）
      Object.assign(reqApiConfig.reqData, reqData);
    }

    // 发起请求，提交数据
    const sendRequestPromise = this.sendRequest(reqApiConfig);

    // 设置了响应配置
    if (this.apiConfig.responseConfig) {
      sendRequestPromise.then((resData) => {
        // 生成字段映射配置
        const fieldMappingConfig = this.getFieldMappingConfig({
          dataObj: resData,
          isApiData: true,
        });
        // 得到新的 vue 数据模型
        let newModelData = this.fieldMapping(fieldMappingConfig);


        // 所有响应字段后处理
        const { transformResponse } = this.apiConfig.responseConfig;
        if (lodash.isFunction(transformResponse)) {
          const newResponse = transformResponse(newModelData, this.vueContext.$data, resData);

          if (lodash.isObject(newResponse)) {
            newModelData = newResponse;
          } else {
            throw '请在 transformResponse 方法中返回一个对象';
          }
        }


        // 老的 vue 数据模型
        const oldModelData = this.getDataSource({
          dataObj: this.vueContext,
          isApiData: false,
        });

        // 初始化 vue 数据
        if (lodash.isObject(oldModelData)) {
          Object.assign(oldModelData, newModelData);
        }
      });
    }

    return sendRequestPromise;
  }

  /*
    功能：生成 fieldMapping 方法需要的配置
    @params apiConfig, api配置, JSON
    @params data, api的响应数据, JSON | js的model数据, JSON
    @return 返回JSON格式
        示例：
        {
          sourceObj: ApiResData,
          mappingList: {
            oldKeyName1: {
              newKeyName: "newKeyName1",
              fieldProcessor: null
            }
          }
        }
    */
  getFieldMappingConfig({
    dataObj,
    isApiData,
  }) {
    // 获取 requestConfig 或 responseConfig
    const dataConfig = isApiData ? this.apiConfig.responseConfig : this.apiConfig.requestConfig;
    // 数据源
    const sourceObj = this.getDataSource({ dataObj, isApiData }) || {};
    // 字段映射表（含字段处理器）
    const mappingList = this.getMappingList(dataConfig.fieldMapping);

    return {
      sourceObj,
      mappingList,
    };
  }

  /*
    功能：获取数据源对象
    @params dataObj, JSON
    @params isApiData, Boolean, 是否Api的响应数据；否为 vue 的响应式数据
    @return 指定数据对象JSON下的具体路径的值/对象
  */
  getDataSource({
    dataObj,
    isApiData,
  }) {
    const dataSourcePath = isApiData ? this.apiConfig.apiDataPath : this.apiConfig.vueDataPath;
    return lodash.get(dataObj, dataSourcePath);
  }

  /*
    功能：fieldMapping 的数组配置转换成 fieldMapping 方法需要的JSON格式
    @params mappingArray, Array
        示例：
        [
          {
            oldFieldName: 'oldKeyName1',
            newFieldName: 'newKeyName1',
            fieldProcessor: (fieldValue) => {
              return fieldValue;
            },
          }
        ]
    @return 返回JSON格式
        示例：
        {
          oldKeyName1: {
            newKeyName: "newKeyName1",
            fieldProcessor: null
          }
        }
    */
  getMappingList(mappingArray) {
    const mappingList = {};
    mappingArray.forEach((obj) => {
      const oldKeyName = obj.oldFieldName;
      const newKeyName = obj.newFieldName;
      const fieldProcessor = obj.fieldProcessor || null;
      mappingList[oldKeyName] = {
        newKeyName,
        fieldProcessor,
      };
    });

    return mappingList;
  }

  /*
    功能：字段映射
    @params sourceObj, JSON, 数据源
        示例：
        {
          oldKeyName1: oldKeyValue1,
          oldKeyName2: oldKeyValue2,
        }
    @params mappingList, JSON, 字段映射表
        示例：
        {
          oldKeyName1: {
            newKeyName: "newKeyName1",
            fieldProcessor: null
          },
          oldKeyName2: {
            newKeyName: "newKeyName2",
            fieldProcessor: fn
          },
        }
    @return 返回新的key的对象
        示例：
        return {
          newKeyName1: keyValue1,
          newKeyName2: keyValue2
        }
    */
  fieldMapping({
    sourceObj,
    mappingList,
  }) {
    const oldObj = lodash.cloneDeep(sourceObj);
    const newObj = {};

    // 字段映射
    Object.keys(mappingList).forEach((keyName) => {
      const oldKeyName = keyName;
      // 如果数据源中找不到配置表的字段，则跳过
      if (!oldObj[oldKeyName]) return false;

      const oldKeyValue = oldObj[keyName];
      const { newKeyName } = mappingList[oldKeyName];
      let newKeyValue = oldKeyValue;

      // 字段处理器
      const { fieldProcessor } = mappingList[oldKeyName];
      if (lodash.isFunction(fieldProcessor)) {
        newKeyValue = fieldProcessor(oldKeyValue);
      }

      newObj[newKeyName] = newKeyValue;
    });

    return newObj;
  }

  // 校验对象属性是否存在
  hasProperty(obj, objName, propertyArray) {
    let result = true;
    for (let i = 0; i < propertyArray.length; i++) {
      result = Object.prototype.hasOwnProperty.call(obj, propertyArray[i]);
      if (!result) {
        throw `请配置 ${objName} 的属性 ${propertyArray[i]}`;
        break;
      }
    }
    return result;
  }

  // 发送Api请求
  sendRequest({ apiPath, reqData, resSuccessMsg, resErrorMsg, onResSuccess, onResError, onResFinally }) {
    const apiPromise = this.vueContext.$TRPC.newRequest(apiPath, reqData);
    apiPromise.then((resData) => {
      lodash.isString(resSuccessMsg) ? this.vueContext.$message.success(resSuccessMsg) : null;
      lodash.isFunction(onResSuccess) ? onResSuccess(resData, this.vueContext.$data) : null;
    })
      .catch((err) => {
        lodash.isString(resErrorMsg)
          ? this.vueContext.$message.error(resErrorMsg)
          : this.vueContext.$message.error(err.errInfo);
        lodash.isFunction(onResError) ? onResError(err.errInfo, this.vueContext.$data) : null;
      })
      .finally(() => {
        lodash.isFunction(onResFinally) ? onResFinally(this.vueContext.$data) : null;
      });

    return apiPromise;
  }
};

export default ApiConfigTrigger;
