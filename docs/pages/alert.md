# 确认弹窗


## 示例代码  
<div class="demo">
  <epp-alert
    title="您有重要信息未读"
    subTitle="是否确认删除该信息"
    desc="删除后无法查看该信息"
    :dialog-visible="true"
    width="30%"
    type="normal"
  >
  </epp-alert>
</div><br />



```vue
<epp-alert
  title="您有重要信息未读"
  subTitle="是否确认删除该信息"
  desc="删除后无法查看该信息"
  :dialog-visible="true"
  width="30%"
  type="normal"
>
</epp-alert>
```


## 组件属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
title | 标题 | string | - | — |
subTitle | 副标题 | string | - | 请确认 |
desc | 说明文案 | string | — | — |
dialog-visible | 展示状态 | boolean | — | false |
width | 宽度 | string | - | 30% |
type | 类型，除了可选值，还可以自定义使用 iconfont | string | normal / warning / error / success | normal |