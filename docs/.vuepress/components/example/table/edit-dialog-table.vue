<template>
  <div>
    <epp-table :column="tableData.column" :data="tableData.data"> </epp-table>

    <nb-dialog :visible.sync="dialogVisible" title="编辑" append-to-body>
      <div class="dialog-content">
        <nb-form v-if="currentEdit" label-width="100px">
          <nb-form-item label="日期">
            <nb-date-picker
              v-model="currentEdit.date"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
            >
            </nb-date-picker>
          </nb-form-item>

          <nb-form-item label="姓名">
            <nb-input v-model="currentEdit.name" placeholder="请输入姓名">
            </nb-input>
          </nb-form-item>

          <nb-form-item label="地址">
            <nb-input
              v-model="currentEdit.address"
              type="textarea"
              placeholder="请输入地址"
            >
            </nb-input>
          </nb-form-item>
        </nb-form>
      </div>
      <div slot="footer" class="dialog-footer">
        <nb-button @click="dialogVisible = false">取 消</nb-button>
        <nb-button type="primary" @click="confirm">确 定</nb-button>
      </div>
    </nb-dialog>
  </div>
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
          },
          {
            prop: "name",
            label: "姓名",
          },
          {
            prop: "address",
            label: "地址",
          },
          {
            label: "操作",
            render: (h, scope) => {
              return (
                <nb-button
                  type="primary"
                  onClick={() => {
                    this.openDialog(scope);
                  }}
                >
                  编辑
                </nb-button>
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
      currentEdit: null,
      currentIndex: null,
      dialogVisible: false,
    };
  },
  methods: {
    openDialog(scope) {
      this.currentEdit = JSON.parse(JSON.stringify(scope.row));
      this.currentIndex = scope.$index;
      this.dialogVisible = true;
    },
    confirm() {
      this.dialogVisible = false;
      this.$set(this.tableData.data, this.currentIndex, this.currentEdit);
    },
  },
};
</script>
