<template>
  <div>
    <div class="toolbar">
      <nb-button @click="undo" size="small">撤消</nb-button>
      <nb-button @click="redo" size="small">重做</nb-button>
      <label for="input" class="insert">插入图片</label>
      <input type="file" @change="handleFileChange" id="input" hidden />
      <nb-button @click="preview" size="small" style="margin-left: 10px"
        >预览</nb-button
      >
      <nb-button @click="save" size="small">保存</nb-button>
      <nb-button @click="clearCanvas" size="small">清空画布</nb-button>
      <nb-button @click="setPage" size="small">配置页面</nb-button>
    </div>
    <!-- 预览 -->
    <Preview v-model="isShowPreview" @change="handlePreviewChange" />
    <Setpage :show.sync="isShowSetPage"></Setpage>
  </div>
</template>

<script>
import Preview from "./HeaderComponents/Preview";
import Setpage from "./HeaderComponents/SetPage";

export default {
  components: { Preview, Setpage },

  data() {
    return {
      formConfig: {
        formData: {},
        formItem: [],
      },
      isShowPreview: false,
      isShowSetPage: false,
    };
  },
  methods: {
    getFormData(data) {
      console.log(data);
    },
    undo() {
      this.$store.commit("undo");
    },
    redo() {
      this.$store.commit("redo");
    },
    preview() {
      this.isShowPreview = true;
      this.$store.commit("setEditMode", "preview");
    },
    save() {
      localStorage.setItem("canvasData", JSON.stringify(this.componentData));
      localStorage.setItem("canvasStyle", JSON.stringify(this.canvasStyleData));
      this.$message.success("保存成功");
    },
    clearCanvas() {
      this.$store.commit("setComponentData", []);
      this.$store.commit("recordSnapshot");
    },
    handleFileChange(e) {
      const file = e.target.files[0];
      if (!file.type.includes("image")) {
        toast("只能插入图片");
        return;
      }

      const reader = new FileReader();
      reader.onload = (res) => {
        const fileResult = res.target.result;
        const img = new Image();
        img.onload = () => {
          this.$store.commit("addComponent", {
            component: {
              ...commonAttr,
              id: generateID(),
              component: "Picture",
              label: "图片",
              icon: "",
              propValue: fileResult,
              style: {
                ...commonStyle,
                top: 0,
                left: 0,
                width: img.width,
                height: img.height,
              },
            },
          });

          this.$store.commit("recordSnapshot");
        };

        img.src = fileResult;
      };

      reader.readAsDataURL(file);
    },
    handlePreviewChange() {
      this.$store.commit("setEditMode", "edit");
    },
    setPage() {
      this.isShowSetPage = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.toolbar {
  height: 64px;
  line-height: 64px;
  background: #fff;
  border-bottom: 1px solid #ddd;

  .canvas-config {
    display: inline-block;
    margin-left: 10px;
    font-size: 14px;
    color: #606266;

    input {
      width: 50px;
      margin-left: 10px;
      outline: none;
      padding: 0 5px;
      border: 1px solid #ddd;
      color: #606266;
    }

    span {
      margin-left: 10px;
    }
  }

  .insert {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
    margin-left: 10px;

    &:active {
      color: #3a8ee6;
      border-color: #3a8ee6;
      outline: 0;
    }

    &:hover {
      background-color: #ecf5ff;
      color: #3a8ee6;
    }
  }
}
</style>