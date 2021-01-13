# 按钮


## 示例代码  

<br />

<demo-block>
  <example-button-button slot="source"></example-button-button>
  <<< @/docs/.vuepress/components/example/button/button.vue
</demo-block>

## 按钮使用规范

1. 请求接口的按钮，必须加上loading态
2. 大页面表单，使用宽版按钮



## 组件属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
type | 类型 | string | primary / secondary / text | — |
size | 尺寸 | string | big / small / mini | — |
wide | 固定宽度（需配合size="big"，一起使用） | string | — | — |
loading | 是否加载中状态 | boolean | — | false |
disabled | 是否禁用状态 | boolean | — | false |
icon | 图标类名 | string | — | — |
autofocus | 是否默认聚焦 | boolean | — | false |
native-type | 原生 type 属性 | string | button / submit / reset | button |