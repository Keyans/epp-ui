<template>
  <epp-form ref="eppForm" :formConfig="formConfig"></epp-form>
</template>

<script>
export default {
  data() {
    return {
      formConfig: {
        inline:true,
        col:2,
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
              this.submit();
            },
          },
          {
            type: "",
            name: "重置",
            click: () => {
              this.$refs.eppForm.resetForm();
            },
          },
        ],
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
    submit() {
     console.log(this.$refs.eppForm.getFormData())
    },
  },
};
</script>
