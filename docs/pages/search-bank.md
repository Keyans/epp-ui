
# 选择银行/支行组件（业务组件）


## 使用说明
适用项目：商家系统  
文件地址：/src/components/epp-search-bank.vue  
引用代码：  
```javascript
import EppSearchBank from '@/components/epp-search-bank.vue';

export default {
  components: {
    EppSearchBank,
  }
}
```
  

## 示例代码

#### 示例：搜索银行名称  
说明：搜索银行关键词，查询业务是否支持含关键词的银行  
例如：搜索 "招商"，搜索出 "招商银行"  

<code>初始状态</code>  

![](https://mvp-web-1300522992.cos.ap-chengdu.myqcloud.com/img/coco_tob/epp_ui_demo/epp-search-bank/bankname1.png)
  
<code>打开搜索弹层状态</code>  

![](https://mvp-web-1300522992.cos.ap-chengdu.myqcloud.com/img/coco_tob/epp_ui_demo/epp-search-bank/bankname3.png)
  
<code>已选状态</code>  
  
![](https://mvp-web-1300522992.cos.ap-chengdu.myqcloud.com/img/coco_tob/epp_ui_demo/epp-search-bank/bankname2.png)  


```vue
<template>
  <div> 
    <epp-search-bank
      searchType="bankName"
      :initValue.sync="bankName"
      buttonText="点击选择开户银行"
      dialogTitle="选择开户银行"
      searchInputPlaceholder="请输入开户银行名称"
    ></epp-search-bank>
  </div> 
</template>

<script>
import EppSearchBank from '@/components/epp-search-bank.vue';

export default {
  components: {
    EppSearchBank
  },
  data() {
    return {
      bankName : "",
    }
  }
}
</script>
```



#### 示例：搜索银行支行全称  
说明：搜索银行支行关键词，查询业务是否支持含关键词的银行支行  
例如：指定搜索范围 "招商银行"，搜索关键词填 "蛇口"，搜索出 "招商银行深圳蛇口支行"  


<code>初始状态</code>  

![](https://mvp-web-1300522992.cos.ap-chengdu.myqcloud.com/img/coco_tob/epp_ui_demo/epp-search-bank/bankbranch1.png)
  
<code>打开搜索弹层状态</code>  

![](https://mvp-web-1300522992.cos.ap-chengdu.myqcloud.com/img/coco_tob/epp_ui_demo/epp-search-bank/bankbranch3.png)
  
<code>已选状态</code>  
  
![](https://mvp-web-1300522992.cos.ap-chengdu.myqcloud.com/img/coco_tob/epp_ui_demo/epp-search-bank/bankbranch2.png)  



```vue
<template>
  <div> 
    <epp-search-bank
      searchType="bankBranch"
      searchBankName="招商银行"
      :initValue.sync="bankBranch"
      buttonText="点击选择开户银行支行"
      dialogTitle="选择开户银行支行"
      searchInputPlaceholder="请输入开户银行支行名称"
      :searchInputRequired="false"
    ></epp-search-bank>
  </div> 
</template>

<script>
import EppSearchBank from '@/components/epp-search-bank.vue';

export default {
  components: {
    EppSearchBank
  },
  data() {
    return {
      bankBranch : "",
    }
  }
}
</script>
```





## 组件属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| searchType | 搜索类型，搜索银行名称(bankName)或搜索银行支行全称(bankBranch) | String | bankName、bankBranch | "bankName" |
| searchBankName | 如果 searchType="bankBranch"，则可指定搜索银行名称的范围。<br />如 searchBankName="招商银行"，则可在含"招商银行"关键词的记录集中进行搜索 | String | - | "" |
| initValue | 银行名称或银行支行全称的值（初始化和选择后的值） | String | - | "" |
| buttonText | 选择控件的文本 | String | - | "" |
| dialogTitle | 弹窗标题的文本 | String | - | "" |
| searchInputPlaceholder | 弹窗搜索输入框提示文本 | String | - | "" |
| searchInputRequired | 是否必须输入关键词，默认 true | Boolean | - | true |





