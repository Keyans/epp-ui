# dispickers省市区三级联动组件

本组件基于nb-design进行二次封装,更多请参考
<a href="https://element.eleme.io/#/zh-CN/component/form" target="_blank">element-ui——form组件</a>参数

## 省市区三级联动组件基础

基础的省市区三级联动组件展示用法。<br>
自定义传入 地址库
传入变量: districts 例如: :districts="districts"<br>
注意* 若该变量为异步请求后再传入的,需判断该变量再进行加载,在组件使用时添加命令 v-if="districts"

<demo-block>
  <example-dispickers-base-dispickers slot="source"></example-dispickers-base-dispickers>
  <<< @/docs/.vuepress/components/example/dispickers/base-dispickers.vue
</demo-block>

本地区组件需配合相应的业务组件使用 <br>
业务组件已封装,若无特殊业务要求可直接使用,若有其他要求,支持更改<br>

<demo-block>
  <example-dispickers-operation-dispickers slot="source"></example-dispickers-operation-dispickers>
  <<< @/docs/.vuepress/components/example/dispickers/operation-dispickers.vue
</demo-block>

使用业务组件案例 <br>

<demo-block>
  <example-dispickers-use-case slot="source"></example-dispickers-use-case>
  <<< @/docs/.vuepress/components/example/dispickers/use-case.vue
</demo-block>