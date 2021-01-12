<template>
  <div class="epp-table">
    <nb-table
      ref="elTable"
      v-bind="$attrs"
      v-on="$listeners"
      :data="tableData"
      :span-method="this.merge ? this.mergeMethod : this.spanMethod"
    >
      <epp-column
        v-bind="$attrs"
        v-for="(item, index) in column"
        :key="index"
        :column="item"
      >
      </epp-column>
      <!-- 如果为empty则处理默认为空的情况 -->
      <template v-slot:empty>
        <slot name="empty"></slot>
      </template>
      <!-- 在最后一行插入默认slot -->
      <template v-if="$slots.default">
        <slot></slot>
      </template>
    </nb-table>
    <nb-pagination
      class="epp-table-pagination"
      v-if="pagination"
      v-bind="$attrs"
      v-on="$listeners"
      :layout="layout"
      :pager-count="pagerCount"
      :page-count="pageCount"
      :page-sizes="pageSizes"
      @current-change="paginationCurrentChange"
      :style="{ 'margin-top': paginationTop, 'text-align': paginationAlign }"
    >
    </nb-pagination>
  </div>
</template>

<script>
import eppColumn from "./epp-column";
import Sortable from "sortablejs";
import { clonedeep } from "lodash";
export default {
  name: "eppTable",
  props: {
    sortable: Boolean,
    sortOptions: {
      type: Object,
      required: false,
      default: () => {
        return {};
      },
    },
    column: Array,
    data: Array,
    spanMethod: Function,
    pagination: {
      type: Boolean,
      default: false,
    },
    pageCount: {
      type: Number,
      default: 1,
    },
    pagerCount: {
      type: Number,
      default: 5,
    },
    pageSizes: {
      type: Array,
      default: () => [5, 10, 20, 30],
    },
    layout: {
      type: String,
      default: "total, sizes, prev, pager, next, jumper",
    },
    paginationTop: {
      type: String,
      default: "15px",
    },
    paginationAlign: {
      type: String,
      default: "right",
    },
    merge: Array,
  },
  components: {
    eppColumn,
  },
  data() {
    return {
      isSortablejs: null, //判断是否有sortablejs
      tableKey: new Date().getTime(),
      mergeLine: {},
      mergeIndex: {},
      defaultSortOptions: {
        //设置表格可拖拽
        sort: true, // boolean 定义是否列表单元是否可以在列表容器内进行拖拽排序
        delay: 100, // number 定义鼠标选中列表单元可以开始拖动的延迟时间；
        animation: 150, // ms, number 单位：ms，定义排序动画的时间
        draggable: ".nb-table__row", // 允许拖拽的项目类名
        // 开始拖拽的时候
        onStart: function(/**Event*/ evt) {
          evt.oldIndex; // element index within parent
        },
        onChoose: function(/**Event*/ evt) {
          evt.oldIndex; // element index within parent
        },
        // 元素未被选中的时候（从选中到未选中）
        onUnchoose: function(/**Event*/ evt) {
          // same properties as onEnd
        },
        // 结束拖拽
        onEnd: (/**Event*/ evt) => {
          let data = JSON.parse(JSON.stringify(this.tableData));
          const currRow = data.splice(evt.oldIndex, 1)[0];
          data.splice(evt.newIndex, 0, currRow);
          this.$emit("update:data", data);
        },
        // 元素从一个列表拖拽到另一个列表
        onAdd: function(/**Event*/ evt) {
          // same properties as onEnd
        },
        // 列表内元素顺序更新的时候触发
        onUpdate: function(/**Event*/ evt) {
          // same properties as onEnd
        },
        // 列表的任何更改都会触发
        onSort: function(/**Event*/ evt) {
          // same properties as onEnd
        },
        // 元素从列表中移除进入另一个列表
        onRemove: function(/**Event*/ evt) {
          // same properties as onEnd
        },
        // 试图拖拽一个filtered的元素
        onFilter: function(/**Event*/ evt) {
          var itemEl = evt.item; // HTMLElement receiving the `mousedown|tapstart` event.
        },
        // 拖拽移动的时候
        onMove: function(/**Event*/ evt, /**Event*/ originalEvent) {
          // Example: https://jsbin.com/nawahef/edit?js,output
          evt.dragged; // dragged HTMLElement
          evt.draggedRect; // DOMRect {left, top, right, bottom}
          evt.related; // HTMLElement on which have guided
          evt.relatedRect; // DOMRect
          evt.willInsertAfter; // Boolean that is true if Sortable will insert drag element after target by default
          originalEvent.clientY; // mouse position
          // return false; — for cancel
          // return -1; — insert before target
          // return 1; — insert after target
        },
        // clone一个元素的时候触发
        onClone: function(/**Event*/ evt) {
          var origEl = evt.item;
          var cloneEl = evt.clone;
        },
        // 拖拽元素改变位置的时候
        onChange: function(/**Event*/ evt) {
          evt.newIndex; // most likely why this event is used is to get the dragging element's current index
          // same properties as onEnd
        },
      },
    };
  },
  created() {
    this.getMergeArr(this.data, this.merge);
  },
  computed: {
    dataLength() {
      return this.data.length;
    },
    sortableOptions() {
      return Object.assign(this.sortOptions, this.defaultSortOptions);
    },
    tableData() {
      return this.data;
    },
  },
  mounted() {
    if (this.sortable) this.initSort();
  },
  methods: {
    initSort(type, val) {
      const tbody = this.$refs.elTable.$el.children[2].firstElementChild
        .children[1]; //获取element-table中的tbody
      this.isSortablejs = new Sortable(tbody, this.sortableOptions);
    },

    clearSelection() {
      this.$refs.elTable.clearSelection();
    },
    toggleRowSelection(row, selected) {
      this.$refs.elTable.toggleRowSelection(row, selected);
    },
    toggleAllSelection() {
      this.$refs.elTable.toggleAllSelection();
    },
    toggleRowExpansion(row, expanded) {
      this.$refs.elTable.toggleRowExpansion(row, expanded);
    },
    setCurrentRow(row) {
      this.$refs.elTable.setCurrentRow(row);
    },
    clearSort() {
      this.$refs.elTable.clearSort();
    },
    clearFilter(columnKey) {
      this.$refs.elTable.clearFilter(columnKey);
    },
    doLayout() {
      this.$refs.elTable.doLayout();
    },
    sort(prop, order) {
      this.$refs.elTable.sort(prop, order);
    },
    paginationCurrentChange(val) {
      this.$emit("p-current-change", val);
    },
    getMergeArr(tableData, merge) {
      if (!merge) return;
      this.mergeLine = {};
      this.mergeIndex = {};
      merge.forEach((item, k) => {
        tableData.forEach((data, i) => {
          if (i === 0) {
            this.mergeIndex[item] = this.mergeIndex[item] || [];
            this.mergeIndex[item].push(1);
            this.mergeLine[item] = 0;
          } else {
            if (data[item] === tableData[i - 1][item]) {
              this.mergeIndex[item][this.mergeLine[item]] += 1;
              this.mergeIndex[item].push(0);
            } else {
              this.mergeIndex[item].push(1);
              this.mergeLine[item] = i;
            }
          }
        });
      });
    },
    mergeMethod({ row, column, rowIndex, columnIndex }) {
      const index = this.merge.indexOf(column.property);
      if (index > -1) {
        const _row = this.mergeIndex[this.merge[index]][rowIndex];
        const _col = _row > 0 ? 1 : 0;
        return {
          rowspan: _row,
          colspan: _col,
        };
      }
    },
  },
  watch: {
    merge() {
      this.getMergeArr(this.data, this.merge);
    },
    dataLength() {
      this.getMergeArr(this.data, this.merge);
    },
    sortable: {
      handler(val) {
        if (val && this.isSortablejs === null) {
          this.initSort();
        }
        //根据传入的sortable判断是否启用
        if (this.isSortablejs) {
          this.isSortablejs.option("disabled", !val);
        }
      },
    },
  },
};
</script>
