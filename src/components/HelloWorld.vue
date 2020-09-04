<!--
 * @Author: your name
 * @Date: 2020-08-26 16:33:33
 * @LastEditTime: 2020-09-04 20:08:35
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /coco_tob_cms/Users/abbotwu/project/errordemo/src/components/HelloWorld.vue
-->
<template>
  <div class="hello"></div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      setTimeout(() => {
        this.test();
      });
      // window.onerror=(...args)=>{
      //   console.log(args, 222);
      // }
      window.addEventListener("unhandledrejection",e=>{
        throw e.reason
      })
      window.addEventListener("error",args=>{
              console.log(args, 555);
              return true;
      },true)
      setTimeout(() => {
        console.log("2=>start");
        console.log("2=>end");
      });
    },
    test() {
      console.log("1=>start");
      error;
      console.log("1=>end");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
