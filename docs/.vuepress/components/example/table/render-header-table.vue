<template>
  <epp-table :column="tableData.column" :data="tableData.data"> </epp-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: {
        column: [
          {
            prop: "date",
            label: "日期",
            renderHeader: (h, scope) => {
              return (
                <span>
                  <i class="nb-icon-time">{scope.column.label}</i>
                </span>
              );
            },
          },
          {
            prop: "name",
            label: "姓名",
          },
          {
            label: "操作",
            renderHeader: (h, scope) => {
              return (
                <nb-input
                  value={this.search}
                  size="mini"
                  placeholder="输入关键字搜索"
                  onInput={(val) => {
                    this.search = val;
                  }}
                />
              );
            },
            render: (h, scope) => {
              return (
                <div>
                  <nb-button
                    size="mini"
                    onClick={() => {
                      this.handleEdit(scope.$index, scope.row);
                    }}
                  >
                    编辑
                  </nb-button>
                  <nb-button
                    size="mini"
                    type="danger"
                    onClick={() => {
                      this.handleDelete(scope.$index, scope.row);
                    }}
                  >
                    删除
                  </nb-button>
                </div>
              );
            },
          },
        ],
        data: [
          {
            date: "2016-05-02",
            name: "王小虎1",
            address: "上海市普陀区金沙江路 1518 弄",
          },
          {
            date: "2016-05-02",
            name: "王小虎2",
            address: "上海市普陀区金沙江路 1518 弄",
          },
          {
            date: "2016-05-02",
            name: "王小虎3",
            address: "上海市普陀区金沙江路 1518 弄",
          },
        ],
      },
      search: "",
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      this.$message(`点击的了编辑，索引：${index}`);
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.$message(`点击的了删除，索引：${index}`);
    },
  },
};
</script>
