<template>
  <epp-form ref="eppForm" :formConfig="formConfig"></epp-form>
</template>

<script>
export default {
  data() {
    return {
      formConfig: {
        formData: {
          number: "",
          id: "",
          date: "",
          switchValue: "",
        },
        btn: [
          {
            type: "primary",
            name: "提交",
            click: () => {
              console.log(this.$refs.eppForm.getFormData());
            },
          },
          {
            name: "重置",
            click: () => {
              this.$refs.eppForm.resetForm();
            },
          },
        ],
        //数据更新方法
        onUpdateData: ({ key, value }) => {
          console.log(key, value);
        },
        formItem: [
          {
            label: "测试",
            model: "switchValue",
            componentType: "input",
            blur: (val) => {
              console.log(val, "blurEvent");
            },
            click: (val) => {
              console.log(val, "clickEvent");
            },
            focus: (val) => {
              console.log("focusEvent");
            },
            clear: (val) => {
              console.log(val, "clearEvent");
            },
            keyupEnter: (val) => {
              console.log(val, "keyupEnter");
            },
          },
          {
            label: "违规单号",
            model: "number",
            componentType: "input",
          },
          {
            label: "时间",
            model: "date",
            componentType: "date-picker",
            type: "datetimerange",
            rangeSeparator: "至",
            startPlaceholder: "开始日期",
            endPlaceholder: "结束日期",
            placeholder: "选择时间",
          },
          {
            label: "店铺id",
            model: "id",
            componentType: "select",
            children: {
              label: "label",
              value: "value",
              options: [
                {
                  label: "区域一",
                  value: "shanghai",
                },
                {
                  label: "区域二",
                  value: "beijing",
                },
              ],
            },
          },
        ],
      },
    };
  },
  methods: {
    getEppFormData() {
      console.log(this.$refs.eppForm.getFormData());
    },
  },
};
</script>
