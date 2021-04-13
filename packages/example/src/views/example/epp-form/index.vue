<template>
  <div>
    <test-form :formConfig="formConfig" @getFormData="getFormData"></test-form>
  </div>
</template>

<script>
import testForm from "./epp-form3/epp-form";
const pickerOptions = {
  shortcuts: [
    {
      text: "今天",
      onClick(picker) {
        picker.$emit("pick", new Date());
      },
    },
    {
      text: "昨天",
      onClick(picker) {
        const date = new Date();
        date.setTime(date.getTime() - 3600 * 1000 * 24);
        picker.$emit("pick", date);
      },
    },
    {
      text: "一周前",
      onClick(picker) {
        const date = new Date();
        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
        picker.$emit("pick", date);
      },
    },
  ],
};
export default {
  components: { testForm },
  data() {
    return {
      formConfig: {
        col: 1,
        inline: false, // 默认为横向展示
        onUpdateData: (...data) => {},
        labelPosition: "left",
        formData: {
          title: "",
          valueType: "",
          category: [],
          valueType1: [],
          girlfriend: false,
          dateTime: "",
          test1: "",
          test2: "",
          test3: "",
        },
        formDesc: {
          girlfriend: {
            type: "radio",
            label: "是否有女朋友",
            labelWidth: "120px",
            options: [
              { text: "有", label: true },
              { text: "无", label: false },
            ],
          },
          girlfriendName: {
            type: "input",
            label: "女朋友名字",
            labelWidth: "100px",
            vif(data) {
              console.log(data)
              return data.girlfriend === true;
            },
          },
          activeName: {
            type: "input",
            label: "活动名称",
            on: {
              blur: (e) => {
                console.log(e.target.value);
              },
              focus: (e) => {
                console.log(e.target.value);
              },
            },
          },
          activePlace: {
            type: "select",
            label: "活动区域",
            options: [
              { value: "选项1", label: "区域一" },
              { value: "选项2", label: "区域一" },
            ],
          },
          category: {
            type: "cascader",
            label: "活动类目",
            options: [
              {
                value: "dongman",
                label: "动漫",
                children: [
                  { value: "dongmanzatan", label: "动漫杂谈" },
                  { value: "donghuajishu", label: "动画技术" },
                  { value: "dongmanzixun", label: "动漫资讯" },
                ],
              },
              {
                value: "biancheng",
                label: "编程",
                children: [
                  { value: "vue", label: "Vue" },
                  { value: "css", label: "CSS" },
                  { value: "html", label: "HTML" },
                  { value: "js", label: "JavaScript" },
                ],
              },
            ],
          },
          activeTime: {
            type: "datetime",
            label: "活动时间",
            attrs: {
              placeholder: "选择日期时间",
              pickerOptions,
            },
          },
          delivery: {
            type: "switch",
            label: "即时配送",
          },
          activeType: {
            type: "checkbox",
            label: "活动性质",
            default: [],
            options: [
              { label: "美食/餐厅线上活动" },
              { label: "地推活动" },
              { label: "线下主题活动" },
              { label: "单纯品牌曝光" },
            ],
          },
          activeSource: {
            type: "radio",
            label: "特殊资源",
            options: [
              { text: "线上品牌商攒助", label: "up" },
              { text: "线下场地免费", label: "down" },
            ],
          },
          activeStatus: {
            type: "textarea",
            label: "活动形式",
          },
          dateTime: {
            type: "datetimerange",
            label: "时间选择",
            render: (h, data) => {
              return (
                <span>
                  <nb-input
                    v-model={data.test1}
                    onChange={this.changeValue}
                  ></nb-input>
                  <nb-input v-model={data.test2}></nb-input>
                  <nb-input v-model={data.test3}></nb-input>
                </span>
              );
            },
          },
        },
      },
    };
  },
  methods: {
    changeValue(val) {
      console.log(val);
    },
    getFormData(data) {
      console.log(data, 123123);
    },
  },
};
</script>

<style>
</style>