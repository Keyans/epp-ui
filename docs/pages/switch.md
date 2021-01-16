## 基本的 switch

```html
<!-- epp绑定值时请使用.sync修饰符 -->
<epp-switch :status.sync="switchStatus"></epp-switch>
```

<demo-block>
  <example-switch-base-switch slot="source"></example-switch-base-switch>
  <<< @/docs/.vuepress/components/example/switch/base-switch.vue
</demo-block>

## 支持自定义数量的文字

<demo-block>
  <example-switch-more-text-switch slot="source"></example-switch-more-text-switch>
  <<< @/docs/.vuepress/components/example/switch/more-text-switch.vue
</demo-block>

## 参数
### Switch Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| status | 开关状态 | Boolean | — | false |
| activeText | 选中文案 | string | — | 开启 |
| inactiveText | 取消文案  | string | — | 关闭 |

## 事件
### Switch Events

| 事件名称      | 说明      | 	回调参数   |
|---------- |--------  |-------- |
| change | switch 状态发生变化时的回调函数  | 	新状态的值 |