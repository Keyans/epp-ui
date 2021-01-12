# table组件


本组件基于nb-design进行二次封装,更多请参考
<a href="https://element.eleme.io/#/zh-CN/component/table" target="_blank">element-ui——table组件</a>参数

## 基础表格

基础的表格展示用法。

<demo-block>
  <example-table-basis-table slot="source"></example-table-basis-table>
  <<< @/docs/.vuepress/components/example/table/basis-table.vue
</demo-block>


## 拖拽表格

拖拽表格展示用法。

<demo-block>
  <example-table-drag-table slot="source"></example-table-drag-table>
  必须通过指定 Table 组件的 `row-key` 属性来为 Table 增加拖拽属性,`sortable`设置为`true`,可传入`sortOptions`的配置来修改默认的拖动配置。

  <<< @/docs/.vuepress/components/example/table/drag-table.vue
</demo-block>


## 表格对齐

表格头部及内容的对齐方式。

<demo-block>
  <example-table-align-table slot="source"></example-table-align-table>
  默认表头及表格内容左对齐，可以分别设置不同字段的表头及表格内容对齐方式。

`epp-table`设置`align`属性可以设置整体表格的对齐方式，默认`left`左对齐，可配置项：`left`、`center`、`right`。

`column`中可单独为某个字段配置`align`，优先级`column配置的align` > `epp-table配置的align`。

表头对齐`header-align`同理，如果不设置对齐方式同`column`和`epp-table`设置的`align`

<<< @/docs/.vuepress/components/example/table/align-table.vue
</demo-block>

## 带斑马纹表格

使用带斑马纹的表格，可以更容易区分出不同行的数据。

<demo-block>
  <example-table-stripe-table slot="source"></example-table-stripe-table>
  <<< @/docs/.vuepress/components/example/table/stripe-table.vue
</demo-block>

## 带边框表格

<demo-block>
  <example-table-border-table slot="source"></example-table-border-table>
  <<< @/docs/.vuepress/components/example/table/border-table.vue
</demo-block>

## 带状态表格

可将表格内容 highlight 显示，方便区分「成功、信息、警告、危险」等内容。

<demo-block>
  <example-table-status-table slot="source"></example-table-status-table>
  可以通过指定 Table 组件的 `row-class-name` 属性来为 Table 中的某一行添加 class，表明该行处于某种状态。

<<< @/docs/.vuepress/components/example/table/status-table.vue
</demo-block>

## 固定表头

纵向内容过多时，可选择固定表头。

<demo-block>
  <example-table-fixed-header-table slot="source"></example-table-fixed-header-table>
  只要在`epp-table`元素中定义了`height`属性，即可实现固定表头的表格，而不需要额外的代码。

<<< @/docs/.vuepress/components/example/table/fixed-header-table.vue
</demo-block>

## 固定列

横向内容过多时，可选择固定列。

<demo-block>
  <example-table-fixed-column-table slot="source"></example-table-fixed-column-table>
  固定列需要在`column`属性中配置`fixed`属性，它接受 Boolean 值或者leftright，表示左边固定还是右边固定。

<<< @/docs/.vuepress/components/example/table/fixed-column-table.vue
</demo-block>

## 流体高度

当数据量动态变化时，可以为 Table 设置一个最大高度。

<demo-block>
  <example-table-fluid-height-table slot="source"></example-table-fluid-height-table>
  通过设置`max-height`属性为 Table 指定最大高度。此时若表格所需的高度大于最大高度，则会显示一个滚动条。

<<< @/docs/.vuepress/components/example/table/fluid-height-table.vue
</demo-block>

## 多级表头

数据结构比较复杂的时候，可使用多级表头来展现数据的层次关系。

<demo-block>
  <example-table-multi-header-table slot="source"></example-table-multi-header-table>
  通过设置`column`中的`children`进行表格头嵌套，理论支持无限极嵌套，嵌套也支持自定义表头及列数据。

<<< @/docs/.vuepress/components/example/table/multi-header-table.vue
</demo-block>

## 单选

选择单行数据时使用色块表示。

<demo-block>
  <example-table-radio-table slot="source"></example-table-radio-table>
  同 `El-Table` 组件，只需要配置`highlight-current-row`属性即可实现单选。之后由current-change事件来管理选中时触发的事件，它会传入`currentRow`，`oldCurrentRow`。
  如果需要显示索引，可设置索引列`type`属性为`index`即可显示从 1 开始的索引号。

<<< @/docs/.vuepress/components/example/table/radio-table.vue
</demo-block>

## 多选

选择多行数据时使用 Checkbox。

<demo-block>
  <example-table-multiple-table slot="source"></example-table-multiple-table>
  设置`type`为`selection`即可。

<<< @/docs/.vuepress/components/example/table/multiple-table.vue
</demo-block>

## 排序

对表格进行排序，可快速查找或对比数据

<demo-block>
  <example-table-sort-table slot="source"></example-table-sort-table>
  在`column`相应列设置`sortable`属性即可实现以该列为基准的排序，接受一个`Boolean`，默认为`false`。可以通过 `epp-table` 的default-sort属性设置默认的排序列和排序顺序。可以使用`sort-method`或者`sort-by`使用自定义的排序规则。如果需要后端排序，需将`sortable`设置为`custom`，同时在 `epp-table` 上监听`sort-change`事件，在事件回调中可以获取当前排序的字段名和排序顺序，从而向接口请求排序后的表格数据。在本例中，我们还使用了`formatter`属性，它用于格式化指定列的值，接受一个`Function`，会传入两个参数：`row`和`column`，可以根据自己的需求进行处理。

<<< @/docs/.vuepress/components/example/table/sort-table.vue
</demo-block>

## 筛选

对表格进行筛选，可快速查找到自己想看的数据。

<demo-block>
  <example-table-filter-table slot="source"></example-table-filter-table>
  在列中设置 `filters` `filter-method`属性即可开启该列的筛选，`filters` 是一个数组，`filter-method` 是一个方法，它用于决定某些数据是否显示，会传入三个参数：`value`, `row` 和 `column`。

<<< @/docs/.vuepress/components/example/table/filter-table.vue
</demo-block>

## 展开行

当行内容过多并且不想显示横向滚动条时，可以使用 Table 展开行功能。

<demo-block>
  <example-table-expand-row-table slot="source"></example-table-expand-row-table>
  通过设置 `type="expand"`可以开启展开行功能，展开行的内容可以通过`render`自定义

<<< @/docs/.vuepress/components/example/table/expand-row-table.vue
</demo-block>

## 自定义列模板

自定义列的显示内容，可组合其他组件使用。

<demo-block>
  <example-table-render-table slot="source"></example-table-render-table>
  暂不支持官方`<template slot-scope="scope"></template>`用法自定义，统一使用`render`和`JSX`写法。`render`参考[官网文档](https://cn.vuejs.org/v2/guide/render-function.html)。个人觉得`JSX`写法更简洁舒服些，后面的相关示例都是`JSX`写法，
  `vue-cli-2`脚手架搭建的项目如需支持`JSX`，请参考配置：[点击前往](https://github.com/vuejs/babel-plugin-transform-vue-jsx)，如需支持`v-model`写法，请安装配置：[点击前往](https://github.com/nickmessing/babel-plugin-jsx-v-model)。
  `vue-cli-3`脚手架自带，可直接使用`JSX`,`JSX`写法参考同上地址。

<<< @/docs/.vuepress/components/example/table/render-table.vue
</demo-block>

## 树形数据与懒加载

2.8.0+版本支持树形表格

<demo-block>
  <example-table-tree-table slot="source"></example-table-tree-table>
  用法同`el-table`，当 `row` 中包含 `children` 字段时，被视为树形数据。渲染树形数据时，必须要指定 `row-key`。支持子节点数据异步加载。设置 Table 的 `lazy` 属性为 true 与加载函数 `load` 。通过指定 `row` 中的 `hasChildren` 字段来指定哪些行是包含子节点。`children` 与 `hasChildren` 都可以通过 `tree-props` 配置。

<<< @/docs/.vuepress/components/example/table/tree-table.vue
</demo-block>

## 自定义表头

表头支持自定义。

<demo-block>
  <example-table-render-header-table slot="source"></example-table-render-header-table>
  通过设置`renderHeader`来自定义表头，写法同`自定义列模板`

::: tip
由于`vuepress`不支持`JSX`的`v-model`，所以示例代码使用的`value`、`onInput`实现的双向绑定，正常环境下可直接使用`v-model`
:::

<<< @/docs/.vuepress/components/example/table/render-header-table.vue
</demo-block>

## 表尾合计行

若表格展示的是各类数字，可以在表尾显示各列的合计。

<demo-block>
  <example-table-footer-total-table slot="source"></example-table-footer-total-table>
  将`show-summary`设置为`true`就会在表格尾部展示合计行。默认情况下，对于合计行，第一列不进行数据求合操作，而是显示「合计」二字（可通过`sum-text`配置），其余列会将本列所有数值进行求合操作，并显示出来。当然，你也可以定义自己的合计逻辑。使用`summary-method`并传入一个方法，返回一个数组，这个数组中的各项就会显示在合计行的各列中，具体可以参考本例中的第二个表格。

<<< @/docs/.vuepress/components/example/table/footer-total-table.vue
</demo-block>

## 自定义索引

若表格展示的是各类数字，可以在表尾显示各列的合计。

<demo-block>
  <example-table-custom-index-table slot="source"></example-table-custom-index-table>
  通过给 `type=index` 的列传入 `index` 属性，可以自定义索引。该属性传入数字时，将作为索引的起始值。也可以传入一个方法，它提供当前行的行号（从 0 开始）作为参数，返回值将作为索引展示。

<<< @/docs/.vuepress/components/example/table/custom-index-table.vue
</demo-block>

## 合并行或列

多行或多列共用一个数据时，可以合并行或列。

<demo-block>
  <example-table-merge-row-column-table slot="source"></example-table-merge-row-column-table>
  通过给`epp-table`传入`span-method`方法可以实现合并行或列，方法的参数是一个对象，里面包含当前行`row`、当前列`column`、当前行号`rowIndex`、当前列号`columnIndex`四个属性。该函数可以返回一个包含两个元素的数组，第一个元素代表`rowspan`，第二个元素代表`colspan`。 也可以返回一个键名为`rowspan`和`colspan`的对象。

<<< @/docs/.vuepress/components/example/table/merge-row-column-table.vue
</demo-block>

## 表格分页

表格支持开启分页显示

<demo-block>
  <example-table-pagination-table slot="source"></example-table-pagination-table>
  `epp-table`设置属性`pagination`即可开启分页，分页相关参数及用法同`el-pagination`。暂时新增几个新参数，`paginationTop`表示分页距离表格的间距，默认`15px`,`paginationAlign`分页的对齐方式，默认为`right`,分页整体显示在右侧，可配置`left`、`center`、`right`

::: tip
由于分页和表格的`current-change`冲突，所以分页请使用`p-current-change`
:::

<<< @/docs/.vuepress/components/example/table/pagination-table.vue
</demo-block>

## 表格动态合并

支持表格动态合并

<demo-block>
  <example-table-merge-table slot="source"></example-table-merge-table>
  `epp-table`上配置`merge`,`merge`为一个包含需要合并的`column`中`prop`的数组，配置后会自动将值相同的项自动合并。

<<< @/docs/.vuepress/components/example/table/merge-table.vue
</demo-block>

## 普通形式表格编辑

数据简单的情况下，可以通过点击编辑按钮直接进行表格的编辑、保存、取消操作

<demo-block>
  <example-table-edit-table slot="source"></example-table-edit-table>
  由于编辑模式下数据格式不统一，如日期数据通过`DatePicker`选择，普通的文本通过`Input`，下拉选择的通过`ElSelect`等，所以就不进行整合了，
  大家可以通过`render`自定义出任意效果的编辑模式，原理就是根据是否是编辑模式的字段，渲染不同的内容，
  如本例中的`_edit`,为`true`的情况下渲染相应的编辑模式下的组件，否则就是普通的文本。

由于编辑模式中有取消，所以取消的时候得还原原数据，可以通过定义一个`defaultData`,该值为`JSON.parse(JSON.stringify(this.tableData.data))`,
加`JSON.parse`和`JSON.stringify`防止`defaultData`数据随着`this.tableData.data`的改变而改变，取消的时候通过`$index`索引从`defaultData`中拿到原数据，
然后根据`$index`索引修改`this.tableData.data`的数据

::: tip
由于`vuepress`不支持`JSX`的`v-model`，所以示例代码使用的`value`、`onChange`、`onInput`实现的双向绑定，正常环境下可直接使用`v-model`
:::

<<< @/docs/.vuepress/components/example/table/edit-table.vue
</demo-block>

## 弹窗形式表格编辑

数据复杂的情况，建议通过弹窗形式进行数据编辑的操作

<demo-block>
  <example-table-edit-dialog-table slot="source"></example-table-edit-dialog-table>

<<< @/docs/.vuepress/components/example/table/edit-dialog-table.vue
</demo-block>

## 参数

### Table Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| data | 显示的数据 | array | — | — |
| height | Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。  | string/number | — | — |
| max-height | Table 的最大高度。合法的值为数字或者单位为 px 的高度。 | string/number | — | — |
| stripe | 是否为斑马纹 table | boolean | — | false |
| border | 是否带有纵向边框 | boolean | — | false |
| size | Table 的尺寸 | string | medium / small / mini | — |
| fit | 列的宽度是否自撑开 | boolean | — | true |
| show-header | 是否显示表头 | boolean | — | true |
| pagination | 是否展示分页 | boolean | — | true |
| highlight-current-row | 是否要高亮当前行 | boolean | — | false |
| current-row-key | 当前行的 key，只写属性 | String,Number | — | — |
| row-class-name | 行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。 | Function({row, rowIndex})/String | — | — |
| row-style | 行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。 | Function({row, rowIndex})/Object | — | — |
| cell-class-name | 单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。 | Function({row, column, rowIndex, columnIndex})/String | — | — |
| cell-style | 单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。 | Function({row, column, rowIndex, columnIndex})/Object | — | — |
| header-row-class-name | 表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。 | Function({row, rowIndex})/String | — | — |
| header-row-style | 表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。 | Function({row, rowIndex})/Object | — | — |
| header-cell-class-name | 表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。 | Function({row, column, rowIndex, columnIndex})/String | — | — |
| header-cell-style | 表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。 | Function({row, column, rowIndex, columnIndex})/Object | — | — |
| row-key | 行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能与显示树形数据时，该属性是必填的。类型为 String 时，支持多层访问：`user.info.id`，但不支持 `user.info[0].id`，此种情况请使用 `Function`。 | Function(row)/String | — | — |
| empty-text | 空数据时显示的文本内容，也可以通过 `slot="empty"` 设置 | String | — | 暂无数据 |
| default-expand-all | 是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效 | Boolean | — | false |
| expand-row-keys | 可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。| Array | — | |
| default-sort | 默认的排序列的 prop 和顺序。它的`prop`属性指定默认的排序的列，`order`指定默认排序的顺序| Object | `order`: ascending, descending | 如果只指定了`prop`, 没有指定`order`, 则默认顺序是ascending |
| tooltip-effect | tooltip `effect` 属性 | String | dark/light | | dark |
| show-summary | 是否在表尾显示合计行 | Boolean | — | false |
| sum-text | 合计行第一列的文本 | String | — | 合计 |
| summary-method | 自定义的合计计算方法 | Function({ columns, data }) | — | — |
| span-method | 合并行或列的计算方法 | Function({ row, column, rowIndex, columnIndex }) | — | — |
| select-on-indeterminate | 在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。若为 true，则选中所有行；若为 false，则取消选择所有行 | Boolean | — | true |
| indent      | 展示树形数据时，树节点的缩进 | Number | — | 16 |
| lazy        | 是否懒加载子节点数据 | Boolean | — | — |
| load        | 加载子节点数据的函数，lazy 为 true 时生效，函数第二个参数包含了节点的层级信息 | Function(row, treeNode, resolve) | — | — |
| tree-props  | 渲染嵌套数据的配置选项 | Object | — | { hasChildren: 'hasChildren', children: 'children' } |

### Table Events
| 事件名 | 说明 | 参数 |
| ---- | ---- | ---- |
| select | 当用户手动勾选数据行的 Checkbox 时触发的事件 | selection, row |
| select-all | 当用户手动勾选全选 Checkbox 时触发的事件 | selection |
| selection-change | 当选择项发生变化时会触发该事件 | selection |
| cell-mouse-enter | 当单元格 hover 进入时会触发该事件 | row, column, cell, event |
| cell-mouse-leave | 当单元格 hover 退出时会触发该事件 | row, column, cell, event |
| cell-click | 当某个单元格被点击时会触发该事件 | row, column, cell, event |
| cell-dblclick | 当某个单元格被双击击时会触发该事件 | row, column, cell, event |
| row-click | 当某一行被点击时会触发该事件 | row, column, event |
| row-contextmenu | 当某一行被鼠标右键点击时会触发该事件 | row, column, event |
| row-dblclick | 当某一行被双击时会触发该事件 | row, column, event |
| header-click | 当某一列的表头被点击时会触发该事件 | column, event |
| header-contextmenu | 当某一列的表头被鼠标右键点击时触发该事件 | column, event |
| sort-change | 当表格的排序条件发生变化的时候会触发该事件 | { column, prop, order } |
| filter-change | 当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。 | filters |
| current-change | 当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性 | currentRow, oldCurrentRow |
| p-current-change | 当表格使用`pagination`参数分页当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性 | currentRow, oldCurrentRow |
| header-dragend | 当拖动表头改变了列的宽度的时候会触发该事件 | newWidth, oldWidth, column, event |
| expand-change  | 当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded） | row, (expandedRows \| expanded) |

### Table Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| clearSelection | 用于多选表格，清空用户的选择 | — |
| toggleRowSelection | 用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中） | row, selected |
| toggleAllSelection | 用于多选表格，切换所有行的选中状态 | - |
| toggleRowExpansion | 用于可展开表格与树形表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开） | row, expanded |
| setCurrentRow | 用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。 | row |
| clearSort | 用于清空排序条件，数据会恢复成未排序的状态 | — |
| clearFilter | 不传入参数时用于清空所有过滤条件，数据会恢复成未过滤的状态，也可传入由columnKey组成的数组以清除指定列的过滤条件 | columnKey |
| doLayout | 对 Table 进行重新布局。当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法 | — |
| sort | 手动对 Table 进行排序。参数`prop`属性指定排序列，`order`指定排序顺序。 | prop: string, order: string |

### Table Slot
| name | 说明 |
|------|--------|
| append | 插入至表格最后一行之后的内容，如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。若表格有合计行，该 slot 会位于合计行之上。 |

### Table-column Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 对应列的类型。如果设置了 `selection` 则显示多选框；如果设置了 `index` 则显示该行的索引（从 1 开始计算）；如果设置了 `expand` 则显示为一个可展开的按钮 | string | selection/index/expand | — |
| index | 如果设置了 `type=index`，可以通过传递 `index` 属性来自定义索引 | number, Function(index) | - | - |
| column-key | column 的 key，如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件 | string | — | — |
| label | 显示的标题 | string | — | — |
| prop | 对应列内容的字段名，也可以使用 property 属性 | string | — | — |
| width | 对应列的宽度 | string | — | — |
| min-width | 对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列 | string | — | — |
| fixed | 列是否固定在左侧或者右侧，true 表示固定在左侧 | string, boolean | true, left, right | — |
| render-header | 列标题 Label 区域渲染使用的 Function | Function(h, { column, $index }) | — | — |
| sortable | 对应列是否可以排序，如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件 | boolean, string | true, false, 'custom' | false |
| sort-method | 对数据进行排序的时候使用的方法，仅当 sortable 设置为 true 的时候有效，需返回一个数字，和 Array.sort 表现一致 | Function(a, b) | — | — |
| sort-by | 指定数据按照哪个属性进行排序，仅当 sortable 设置为 true 且没有设置 sort-method 的时候有效。如果 sort-by 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2 个排序，以此类推 | String/Array/Function(row, index) | — | — |
| sort-orders | 数据在排序时所使用排序策略的轮转顺序，仅当 sortable 为 true 时有效。需传入一个数组，随着用户点击表头，该列依次按照数组中元素的顺序进行排序 | array | 数组中的元素需为以下三者之一：`ascending` 表示升序，`descending` 表示降序，`null` 表示还原为原始顺序 | ['ascending', 'descending', null] |
| resizable | 对应列是否可以通过拖动改变宽度（需要在 el-table 上设置 border 属性为真） | boolean | — | true |
| formatter | 用来格式化内容 | Function(row, column, cellValue, index) | — | — |
| show-overflow-tooltip | 当内容过长被隐藏时显示 tooltip | Boolean | — | false |
| align | 对齐方式 | String | left/center/right | left |
| header-align | 表头对齐方式，若不设置该项，则使用表格的对齐方式 | String | left/center/right | — |
| class-name | 列的 className | string | — | — |
| label-class-name | 当前列标题的自定义类名 | string | — | — |
| selectable | 仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选 | Function(row, index) | — | — |
| reserve-selection | 仅对 type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 `row-key`） | Boolean | — | false |
| filters | 数据过滤的选项，数组格式，数组中的元素需要有 text 和 value 属性。 | Array[{ text, value }] | — | — |
| filter-placement | 过滤弹出框的定位 | String | 与 Tooltip 的 `placement` 属性相同 | — |
| filter-multiple | 数据过滤的选项是否多选 | Boolean | — | true |
| filter-method | 数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。 | Function(value, row, column) | — | — |
| filtered-value | 选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。 | Array | — | — |

### Table-column Scoped Slot
| name | 说明 |
|------|--------|
| — | 自定义列的内容，参数为 { row, column, $index } |
| header | 自定义表头的内容. 参数为 { column, $index } |




