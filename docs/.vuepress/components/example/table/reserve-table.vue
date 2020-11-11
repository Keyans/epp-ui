<template>
  <epp-table
    v-loading="loading"
    ref="multipleTable"
    :column="tableData.column"
    :data="tableData.data"
    :page-sizes="[5, 10, 20, 30]"
    :total="100"
    :page-size="pageSize"
    pagination
    row-key="id"
    layout="total, sizes, prev, pager, next, jumper"
    @size-change="handleSizeChange"
    @p-current-change="handleCurrentChange"
  >
  </epp-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: {
        column: [
          {
            type: "selection",
            reserveSelection: true,
          },
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
        ],
        data: [],
      },
      newData: [
        {
          id: 1,
          date: "2016-05-02",
          name: `王小虎-1`,
          address: "上海市普陀区金沙江路1",
        },
        {
          id: 2,
          date: "2016-05-02",
          name: `王小虎-1`,
          address: "上海市普陀区金沙江路1",
        },
        {
          id: 3,
          date: "2016-05-02",
          name: `王小虎-1`,
          address: "上海市普陀区金沙江路1",
        },
        {
          id: 4,
          date: "2016-05-02",
          name: `王小虎-1`,
          address: "上海市普陀区金沙江路1",
        },
        {
          id: 5,
          date: "2016-05-02",
          name: `王小虎-1`,
          address: "上海市普陀区金沙江路1",
        },
        {
          id: 6,
          date: "2016-05-03",
          name: `王小虎-1`,
          address: "上海市普陀区金沙江路1",
        },
        {
          id: 7,
          date: "2016-05-04",
          name: `王小虎-1`,
          address: "上海市普陀区金沙江路1",
        },
        {
          id: 8,
          date: "2016-05-05",
          name: `王小虎-1`,
          address: "上海市普陀区金沙江路1",
        },
        {
          id: 9,
          date: "2016-05-06",
          name: `王小虎-1`,
          address: "上海市普陀区金沙江路1",
        },
        {
          id: 10,
          date: "2016-05-07",
          name: `王小虎-1`,
          address: "上海市普陀区金沙江路1",
        },
        {
          id: 11,
          date: "2016-05-02",
          name: `王小虎-1`,
          address: "上海市普陀区金沙江路1",
        },
        {
          id: 12,
          date: "2016-05-02",
          name: `王小虎-1`,
          address: "上海市普陀区金沙江路1",
        },
        {
          id: 13,
          date: "2016-05-02",
          name: `王小虎-1`,
          address: "上海市普陀区金沙江路1",
        },
        {
          id: 14,
          date: "2016-05-02",
          name: `王小虎-1`,
          address: "上海市普陀区金沙江路1",
        },
        {
          id: 15,
          date: "2016-05-02",
          name: `王小虎-1`,
          address: "上海市普陀区金沙江路1",
        },
      ],
    };
  },
};
</script>

<style></style>
