<template>
  <epp-form ref="eppForm" :formConfig="formConfig" :rules="rules"></epp-form>
</template>

<script>
export default {
  data() {
    return {
      formConfig: {
        col: 1,
        size: "medium",
        showMessage: true,
        onUpdateData: ({ key, value }) => {
          console.log(key, value);
        },
        formData: {
          LogisticsCompanyCode: "",
          OrderId: "",
          LogisticsCode: "",
          SendAddressId: "",
          AfterSellAddressId:"",
        },
        btn: [
          {
            type: "",
            name: "重置",
            click: () => {
              this.$refs.eppForm.resetForm();
            },
          },
          {
            type: "primary",
            name: "确认发货",
            click: () => {
              this.submitForm("eppForm");
            },
          },
        ],
        formItem: [
          {
            label: "订单编号",
            model: "OrderId",
            componentType: "input",
            labelWidth: "200px",
            MaxLength: 5,
            valueType: "Number",
            clearable: true,
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
            // styleObject: {
            //   width: "100px",
            // },
          },
          {
            label: "物流公司",
            model: "LogisticsCompanyCode",
            componentType: "select",
            clearable: true,
            children: {
              label: "Value",
              value: "Code",
              options: [
                {
                  Value: "顺丰速运",
                  Code: "SF",
                },
                {
                  Value: "韵达速递",
                  Code: "YD",
                },
                {
                  Value: "圆通速递",
                  Code: "YTO",
                },
                {
                  Value: "丹鸟物流",
                  Code: "DNWL",
                },
                {
                  Value: "申通快递",
                  Code: "STO",
                },
                {
                  Value: "邮政快递包裹",
                  Code: "YZPY",
                },
                {
                  Value: "中通快递",
                  Code: "ZTO",
                },
                {
                  Value: "EMS",
                  Code: "EMS",
                },
                {
                  Value: "德邦快递",
                  Code: "DBL",
                },
                {
                  Value: "苏宁物流",
                  Code: "SNWL",
                },
                {
                  Value: "京东快递",
                  Code: "JD",
                },
              ],
            },
          },
          {
            label: "物流单号",
            model: "LogisticsCode",
            componentType: "input",
            valueType: "LetterAndNumber",
            input: (val) => val.replace(/[\W]/g, ""),
          },
          {
            label: "发货地址",
            model: "SendAddressId",
            componentType: "select",
            children: {
              type: "option", // 默认的option类型
              label: "address",
              value: "merchant_address_id",
              options: [],
            },
          },
          {
            label: "退货地址",
            model: "AfterSellAddressId",
            componentType: "select",
            children: {
              label: "address",
              value: "merchant_address_id",
              options: [],
            },
          },
        ],
      },
      formInline: {
        LogisticsCompanyCode: "",
        OrderId: "",
        LogisticsCode: "",
        SendAddressId: "",
        AfterSellAddressId: "",
      },
      rules: {
        OrderId: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        // LogisticsCode: [
        //   { required: true, message: "请输入物流单号", trigger: "change" },
        // ],
        SendAddressId: [
          { required: true, message: "请选择发货地址", trigger: "change" },
        ],
        LogisticsCompanyCode: [
          { required: true, message: "请选择物流公司", trigger: "change" },
        ],
        AfterSellAddressId: [
          { required: true, message: "请选择退货地址", trigger: "change" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.dialogVisible = true;
        } else {
          return false;
        }
      });
    },
  },
};
</script>
