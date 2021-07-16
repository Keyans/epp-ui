
## 泳道环境切换组件

<demo-block>
  <example-env-switch-base-env-switch slot="source"></example-env-switch-base-env-switch>
  <<< @/docs/.vuepress/components/example/env-switch/base-env-switch.vue
</demo-block>

## 参数
### EppEnvSwitch Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| gateway | 网关地址 | string |  — | yztest.html5.qq.com |
| feature-env-api | 极泳道环境接口 | string |  — | https://node.video.qq.com/x/api/wuji_public/object?appid=nbase_devops&schemaid=feature_env&schemakey=bae6294ecab6464ebf233a91c74424b0 |
| feature-env-header | 泳道环境 header | string |  — | polaris-env |
| intercept-domain | 被代理域名，根据实际使用场景设置 | string |  — | 当前域名（window.location.host） |
