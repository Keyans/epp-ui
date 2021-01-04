## 基本的 switch

```html
<!-- epp绑定值时请使用.sync修饰符 -->
<epp-switch :status.sync="switchStatus"></epp-switch>
```

### props

<p><code>status</code>开关状态</p>
<p><code>activeText</code>选中文案</p>
<p><code>inactiveText</code>取消文案</p>

### method
<p><code>change</code>switch状态发生变化时的回调，回调参数：新状态的值</p>

<demo-block>
  <example-switch-base-switch slot="source"></example-switch-base-switch>
  <<< @/docs/.vuepress/components/example/switch/base-switch.vue
</demo-block>

## 支持自定义数量的文字

<demo-block>
  <example-switch-more-text-switch slot="source"></example-switch-more-text-switch>
  <<< @/docs/.vuepress/components/example/switch/more-text-switch.vue
</demo-block>