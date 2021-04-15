# 确认弹窗


## 示例代码  
<div class="demo">
  <epp-confirm
    title="您有重要信息未读"
    subTitle="是否确认删除该信息"
    desc="删除后无法查看该信息"
    :dialog-visible="true"
    :on-cancel="cancel"
    :on-success="success"
    width="30%"
  >
  </epp-confirm>
</div><br />



```vue
<epp-confirm
  title="您有重要信息未读"
  subTitle="是否确认删除该信息"
  desc="删除后无法查看该信息"
  :dialog-visible="true"
  :on-cancel="cancel"
  :on-success="success"
  width="30%"
>
</epp-confirm>
```


## 组件属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
title | 标题 | string | - | — |
subTitle | 副标题 | string | - | 请确认 |
desc | 说明文案 | string | — | — |
dialog-visible | 展示状态 | boolean | — | false |
on-cancel | 取消时回调函数，函数返回 false 可以阻止弹窗关闭 | function | — | - |
on-succes | 确定时回调函数，函数返回 false 可以阻止弹窗关闭 | function | — | - |
width | 宽度 | string | - | 30% |