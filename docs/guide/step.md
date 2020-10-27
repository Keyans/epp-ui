<!--
 * @Author: your name
 * @Date: 2020-10-27 14:10:33
 * @LastEditTime: 2020-10-27 15:44:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /coco_gs_cms/Users/abbotwu/project/epp-ui/docs/guide/step.md
-->

# epp-ui

```
tnpm install @tencent/epp-ui
```

使用示例

```js
import Vue from "vue";
import App from "./App.vue";

import eppUi from "@tencent/epp-ui";

Vue.use(eppUi);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
```
