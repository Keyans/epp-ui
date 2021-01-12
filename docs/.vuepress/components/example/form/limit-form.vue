<template>
  <epp-form
    ref="eppForm"
    :formConfig="formConfig"
    @getFormData="getFormData"
  ></epp-form>
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
        formItem: [
          {
            label: "测试",
            model: "switchValue",
            componentType: "input",
            maxlength: 5,
            valueType: "Number",
          },
          {
            label: "违规单号",
            model: "number",
            componentType: "input",
            valueType: "Number",
            input: (val) => val.replace(/[\W]/g, ""),
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
    getFormData(data) {
      console.log(data);
    },
  },
};
</script>
