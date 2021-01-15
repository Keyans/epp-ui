
# 选择类目组件（业务组件）


## 使用说明
适用项目：商家系统  
文件地址：/src/components/epp-category.vue  
GIT地址：[https://git.code.oa.com/demeter_web/coco_tob_cms/blob/master/src/components/epp-category.vue](https://git.code.oa.com/demeter_web/coco_tob_cms/blob/master/src/components/epp-category.vue)  
引用代码：  
```javascript
import EppCategory from '@/components/epp-category.vue';

export default {
  components: {
    EppCategory,
  }
}
```
  

## 特殊说明
注意：类目分为 **全量类目** 和 **商家主营类目**


**全量类目**  
  说明：平台完整的类目配置数据  
  接口地址：/fcgi/shoponline/categorylist  
  所属模块：商家系统 - 商家入驻  
  

**商家主营类目**  
  说明：商家入驻时填写的主营类目（1个商家只能申请1个一级类目和最多5个二级类目）；特别注意，早期的种子商家没有主营类目，会拉取全量类目。  
  接口地址：/fcgi/merchantproduct/getcategory  
  所属模块：商家系统 - 商品管理  




类目接口返回的数据结构参考（使用Post方式请求） [http://9.135.90.39:3000/mock/11/fcgi/shoponline/categorylist](http://9.135.90.39:3000/mock/11/fcgi/shoponline/categorylist)  


## 示例代码

#### 示例：单选 & 可搜索类目 & 商家主营类目
说明：适用搜索商品信息场景（常用场景）  

![](https://mvp-web-1300522992.cos.ap-chengdu.myqcloud.com/img/coco_tob/epp_ui_demo/epp-category/category_single_select.png?v=2021.1.14)  


```vue
<template>
  <div> 
    <epp-category
      :init-selected-category.sync="category"
      :cascader-config="{ multiple: false }"
      :filterable="true"
      :show-all-levels="true"
      placeholder="请选择主营类目"
    ></epp-category>
  </div> 
</template>

<script>
import EppCategory from '@/components/epp-category.vue';

export default {
  components: {
    EppCategory
  },
  data() {
    return {
      category : [],
      /*
        category 数据示例：
        [
          [1058, 1059],  //已选择的第一个选项，1058 是一级类目，1059是二级类目，以此类推
          [1058, 1080]   //已选择的第二个选项，1058 是一级类目，1059是二级类目，以此类推
        ]
      */
    }
  }
}
</script>
```



#### 示例：多选 & 最多展开二级类目 & 限制一级类目不可选 & 全量类目  
说明：适用商家修改主营类目的场景（商家主营类目，在入驻时，只能选择1个一级类目和至多5个二级类目）  

![](https://mvp-web-1300522992.cos.ap-chengdu.myqcloud.com/img/coco_tob/epp_ui_demo/epp-category/category_mutiple_select_limit.png)



```vue
<template>
  <div> 
    <epp-category
      :init-selected-category.sync="category"
      :is-full-category="true"
      :limit-level="2"
      :hide-first-category-checkbox="true"
      placeholder="请选择主营类目"
    ></epp-category>
  </div> 
</template>

<script>
import EppCategory from '@/components/epp-category.vue';

export default {
  components: {
    EppCategory
  },
  data() {
    return {
      category : [],
      /*
        category 数据示例：
        [
          [1058, 1059],  //已选择的第一个选项，1058 是一级类目，1059是二级类目，以此类推
          [1058, 1080]   //已选择的第二个选项，1058 是一级类目，1059是二级类目，以此类推
        ]
      */
    }
  }
}
</script>
```


#### 示例：多选任意一级类目 & 全量类目

![](https://mvp-web-1300522992.cos.ap-chengdu.myqcloud.com/img/coco_tob/epp_ui_demo/epp-category/category_mutiple_select.png)



```vue
<template>
  <div> 
    <epp-category
      :init-selected-category.sync="category"
      :is-full-category="true"
      placeholder="请选择主营类目"
    ></epp-category>
  </div> 
</template>

<script>
import EppCategory from '@/components/epp-category.vue';

export default {
  components: {
    EppCategory
  },
  data() {
    return {
      category : [],
      /*
        category 数据示例：
        [
          [1058, 1059],  //已选择的第一个选项，1058 是一级类目，1059是二级类目，以此类推
          [1058, 1080]   //已选择的第二个选项，1058 是一级类目，1059是二级类目，以此类推
        ]
      */
    }
  }
}
</script>
```




## 组件属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| init-selected-category | 初始化或已选择的类目ID数组 | Array | - | [] |
| is-full-category | 是否拉取全量类目配置（默认 false，拉取商户入驻时填写的主营类目，即只有1个一级类目）；<br />如果自定义了 api-path 属性，则以 api-path 的接口数据为准 | Boolean | - | false |
| disabled | 是否禁用 | Boolean | - | false |
| cascader-config | 配置选项（参考 [element cascader组件](https://element.eleme.cn/#/zh-CN/component/cascader#props) 的Props配置） | Object | - | - |
| placeholder | 输入框占位文本 | String | - | "请选择" |
| separator | 选项分隔符 | String | - | " > " |
| show-all-levels | 输入框中是否显示选中值的完整路径 | Boolean | - | true |
| limit-level | 限制类目可选层级，默认-1不限制 | Number | - | -1(不限制) |
| hide-first-category-checkbox | 隐藏一级类目checkbox选项（不可选择一级类目） | Boolean | - | false |
| api-path | api接口请求路径（如 "shoponline/categorylist"，默认接口是商家入驻模块接口，拉取平台全量类目） | String | - | "shoponline/categorylist" |
| filterable | 是否可搜索选项 | Boolean | - | false |
| size | 尺寸 | String | medium / small / mini | - |
| collapse-tags | 多选模式下是否折叠Tag | Boolean | - | false |



## 组件事件

| 事件名称 | 说明 | 回调参数 |
| ---- | ---- | ---- |
| change | 当选中节点变化时触发 | 返回一个包含新旧数据的对象 { newVal, oldVal } |
| init-error | 初始化错误时触发（传入的类目ID与后台接口类目配置不匹配） | - |
| remove-tag | 在多选模式下，移除Tag时触发 | 移除的Tag对应的节点的值 |



## 组件内部方法

| 方法名 | 说明 | 传参 | 回参 |
| ---- | ---- | ---- | ---- |
| selectedCategoryID | 指定的类目ID否存在于已选择的类目ID中，代码示例<br /><br /><code>this.$refs.eppCategory.selectedCategoryID(1006)</code> | 类目ID，Number类型（如，1058） | true / false |

