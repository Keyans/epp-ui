# form组件

本组件基于nb-design进行二次封装,更多请参考
<a href="https://element.eleme.io/#/zh-CN/component/form" target="_blank">element-ui——form组件</a>参数

## 基础表单

基础的表单展示用法。

<demo-block>
  <example-form-base-form slot="source"></example-form-base-form>
  基础表单默认的按钮名称为查询、重置

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
| validate | 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise | Function(callback: Function(boolean, object))
| validateField | 对部分表单字段进行校验的方法 | Function(props: array \| string, callback: Function(errorMessage: string))
| resetFields | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果 | —
| clearValidate | 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果 | Function(props: array \| string)

### Form Events
| 事件名称 | 说明    | 回调参数  |
|--------- |-------- |---------- |
| validate | 任一表单项被校验后触发 | 被校验的表单项 prop 值，校验是否通过，错误消息（如果存在） |

### Form-Item Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| prop    | 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 | string    | 传入 Form 组件的 `model` 中的字段 | — |
| label | 标签文本 | string | — | — |
| label-width | 表单域标签的的宽度，例如 '50px'。支持 `auto`。 | string |       —       | — |
| required | 是否必填，如不设置，则会根据校验规则自动生成 | boolean | — | false |
| rules    | 表单验证规则 | object | — | — |
| error    | 表单域验证错误信息, 设置该值会使表单验证状态变为`error`，并显示该错误信息 | string | — | — |
| show-message  | 是否显示校验错误信息 | boolean | — | true |
| inline-message  | 以行内形式展示校验信息 | boolean | — | false |
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
