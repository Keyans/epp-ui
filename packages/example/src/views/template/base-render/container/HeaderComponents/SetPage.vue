<template>
  <nb-dialog
    title="配置页面"
    :show-close="false"
    :visible.sync="show"
    :fullscreen="true"
  >
    <!-- 配置tab -->
    <section></section>
    <!-- 配置form -->
    <section>
      <nb-form :model="form" :label-position="labelPosition">
        <nb-form-item label="标题">
          <nb-input v-model="form.input1" />
        </nb-form-item>
        <nb-form-item label="字段">
          <nb-input v-model="form.input2" />
        </nb-form-item>
        <nb-form-item label="类型">
          <nb-select v-model="form.value" placeholder="请选择">
            <nb-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </nb-option>
          </nb-select>
        </nb-form-item>
      </nb-form>
    </section>
    <!-- 配置table -->
    <section></section>
    <span slot="footer" class="dialog-footer">
      <nb-button @click="cancer">取 消</nb-button>
      <nb-button type="primary" @click="confirm">确 定</nb-button>
    </span>
  </nb-dialog>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
    defaultTemplate: {
        //表格
        ref: "eppForm",
        formConfig: {
          formData: {
            number: "",
            id: "",
          },
          formItem: [
            {
              label: "测试",
              model: "switchValue",
              componentType: "input",
            },
            {
              label: "违规单号",
              model: "number",
              componentType: "input",
            },
          ],
        },
        //表单
        currentPage: 1,
        pageSize: 5,
        pagination: true,
        loading: false,
        layout: "total, sizes, prev, pager, next, jumper",
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
          ],
          data: [
          {
            cc: 1,
            date: "2016-05-02",
            name: "王小虎1",
            address: "上海市普陀区金沙江路 1518 弄",
          }
          ],
        },
      },
      labelPosition: "top",
      form: {
        input1: "",
        input2: "",
        value: "",
      },
      options: [
        {
          label: "输入框",
          value: "input",
        },
        {
          label: "选择框",
          value: "select",
        },
      ],
    };
  },
  methods: {
    cancer() {
      this.$emit("update:show", false);
    },
    confirm() {
     
      this.$store.commit("setFormConfig", this.form);
      this.$store.commit("setTemplateConfig", this.defaultTemplate);
      this.$emit("update:show", false);
    },
  },
};
</script>

<style>
</style>