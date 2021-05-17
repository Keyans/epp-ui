<template>
  <div>
    <test-steps
      :active="active"
      :steps-list="stepsList"
      :align-center="false"
      finish-status="error"
      direction="vertical"
    ></test-steps>
    <!-- <nb-table
      :data="tableData1"
      :span-method="arraySpanMethod"
      style="width: 100%"
    >
      <nb-table-column prop="id" label="ID" width="180"> </nb-table-column>
      <nb-table-column prop="name" label="姓名"> </nb-table-column>
      <nb-table-column prop="amount1" label="数值 1"> </nb-table-column>
      <nb-table-column prop="amount2" label="数值 2"> </nb-table-column>
      <nb-table-column prop="amount3" label="数值 3"> </nb-table-column>
    </nb-table> -->
  </div>
</template>

<script>
import testSteps from "./epp-steps";

export default {
  components: { testSteps },
  data() {
    return {
      active: 4, //补助
      stepsList: [{ title: "步骤一" }, { title: "步骤二" },{ title: "步骤三" }, { title: "步骤四" }],
      tableData1: [],
      tableData: {
        column: [
          {
            template:true,
            render: (h, scoped) => {
              const tmp = [<div>我试试</div>, <div>来</div>];
              return (
                <div style="width:100%;display:flex;justify-content:space-around">
                  {tmp}
                </div>
              );
            },
            renderHeader:()=>{
              return <div></div>
            }
          },
          {
            prop: "id",
            label: "商品",
          },
          {
            prop: "name",
            label: "价格/数量",
          },
          {
            prop: "amount1",
            label: "订单金额",
          },
          {
            prop: "amount2",
            label: "收货人",
          },
          {
            prop: "amount3",
            label: "买家",
          },
          {
            prop: "amount",
            label: "操作",
          },
        ],
        data: [
          {
            hah: "32313",
            id: "12987122",
            name: "王小虎",
            amount1: "234",
            amount2: "3.2",
            amount3: 10,
            amount: "我测试一下",
          },
          {
            id: "12987123",
            name: "王小虎",
            amount1: "165",
            amount2: "4.43",
            amount3: 12,
            amount: "我测试一下",
          },
          {
            id: "12987124",
            name: "王小虎",
            amount1: "324",
            amount2: "1.9",
            amount3: 9,
            amount: "我测试一下",
          },
          {
            id: "12987125",
            name: "王小虎",
            amount1: "621",
            amount2: "2.2",
            amount3: 17,
            amount: "我测试一下",
          },
          {
            id: "12987126",
            name: "王小虎",
            amount1: "539",
            amount2: "4.1",
            amount3: 15,
            amount: "我测试一下",
          },
        ],
      },
    };
  },
  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return [1, 6];
        } else if (columnIndex === 1) {
          return [0, 0];
        }
      }
    },
  },
};
</script>

<style>
</style>
