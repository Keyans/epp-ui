# form组件

本组件基于nb-design进行二次封装,更多请参考
<a href="https://element.eleme.io/#/zh-CN/component/form" target="_blank">element-ui——form组件</a>参数

## 基础表单

基础的表单展示用法。

<demo-block>
  <example-form-base-form slot="source"></example-form-base-form>
  基础表单默认的按钮名称为查询、重置,默认`select`这种情况下需要设置`children`对象,`label`等价于options中的文字字段属性值,`value`等价于options中的code字段属性值,默认参数为`label:'label'`,`value:value`可不传

  <<< @/docs/.vuepress/components/example/form/base-form.vue
</demo-block>

## 自定义按钮表单

自定义按钮表单名称展示用法。

<demo-block>
  <example-form-button-form slot="source"></example-form-button-form>
  自定义表单通过修改`btn`的list来修改对应表单的展示。`col`的作用主要用于展示行数

  <<< @/docs/.vuepress/components/example/form/button-form.vue
</demo-block>

## 无按钮表单

无按钮表单展示用法。

<demo-block>
  <example-form-no-button-form slot="source"></example-form-no-button-form>
  无按钮表单通过修改`btn`的参数为`false`设置表单不展示。

  <<< @/docs/.vuepress/components/example/form/no-button-form.vue
</demo-block>

## 规则表单

规则的表单展示用法。

<demo-block>
  <example-form-rule-form slot="source"></example-form-rule-form>
  <<< @/docs/.vuepress/components/example/form/rule-form.vue
</demo-block>

## 自定义长度表单

自定义长度表单展示用法。

<demo-block>
  <example-form-width-form slot="source"></example-form-width-form>
  通过修改`formItem`下的`styleObject`对象、默认方式css写法。

  <<< @/docs/.vuepress/components/example/form/width-form.vue
</demo-block>


## 事件表单

表单事件的回调展示用法。

<demo-block>
  <example-form-event-form slot="source"></example-form-event-form>
  <<< @/docs/.vuepress/components/example/form/event-form.vue
</demo-block>

## 输入框规则限制表单

输入框规则限制用法。

<demo-block>
  <example-form-limit-form slot="source"></example-form-limit-form>
   通过修改`formItem`下的`valueType`、目前有Number、LetterAndNumber、更多请参考工具库。支持`element`原属性修改formItem,提供`input`方法自定义设置输入规则,存在`input`会覆盖valueType方法。
   
  <<< @/docs/.vuepress/components/example/form/limit-form.vue
</demo-block>

## 参数
### Form Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| rules    | 表单验证规则 | object | — | — |
| formConfig | 表单数据对象 | object | — | — |            —                |  — |
| formConfig.formData | 表单需要改变对象值 | Object | — | — |
| formConfig.col    | 表格分列 | Number | 1-5 | 3 |
| formConfig.labelPosition | 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 `label-width` | string |  right/left/top            | right |
| formConfig.labelWidth | 表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 `auto`。 | string | — | — |
| formConfig.labelSuffix | 表单域标签的后缀 | string | — | — |
| formConfig.hideRequiredAsterisk | 是否显示必填字段的标签旁边的红色星号 | boolean | — | false |
| formConfig.showMessage  | 是否显示校验错误信息 | boolean | — | true |
| formConfig.inlineMessage  | 是否以行内形式展示校验信息 | boolean | — | false |
| formConfig.statusIcon  | 是否在输入框中显示校验结果反馈图标 | boolean | — | false |
| formConfig.validateOnRuleChange  | 是否在 `rules` 属性改变后立即触发一次验证 | boolean | — | true |
| formConfig.size  | 用于控制该表单内组件的尺寸 | string | medium / small / mini | — |
| formConfig.disabled | 是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效 | boolean | — | false |

### Form Methods

| 方法名      | 说明          | 参数
|---------- |-------------- | --------------
| getFormData | 获取所有表单修改后的结果 | ——
| onUpdateData | 获取没一项的操作结果 | ——
### Form-Item Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| model    | 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 | string    | 传入 Form 组件的 `model` 中的字段 | — |
| label | 标签文本 | string | — | — |
| valueType | 传入类型 | string | Number,LetterAndNumber | — |
| componentType | 传入类型 | string | element支持所有类型 | — |
| children | 在有子操作时选择、例如select | object | — | — |
| labelWidth | 表单域标签的的宽度，例如 '50px'。支持 `auto`。 | string |       —       | — |
| required | 是否必填，如不设置，则会根据校验规则自动生成 | boolean | — | false |
| rules    | 表单验证规则 | object | — | — |
| error    | 表单域验证错误信息, 设置该值会使表单验证状态变为`error`，并显示该错误信息 | string | — | — |
| showMessage  | 是否显示校验错误信息 | boolean | — | true |
| inlineMessage  | 以行内形式展示校验信息 | boolean | — | false |
| size  | 用于控制该表单域下组件的尺寸 | string | medium / small / mini | - |

### Form-Item Slot
| name | 说明 |
|------|--------|
| — | Form Item 的内容 |
| label | 标签文本的内容 |

### Form-Item Scoped Slot
|  name  |   说明  |
|--------|--------|
|  error | 自定义表单校验信息的显示方式，参数为 { error } |

### Form-Item Methods

| 方法名      | 说明          | 参数
|---------- |-------------- | --------------
| resetField | 对该表单项进行重置，将其值重置为初始值并移除校验结果 | -
| clearValidate | 移除该表单项的校验结果 | -
