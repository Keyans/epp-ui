<template>
    <component :is="`componentName`">
    </component>
</template>

<script>
import config from "./config";
import inherit from "./transform";
// import { inherit }  from "@tencent/epp-ui" 正式环境使用这个
export default {
  extends: inherit(config),
};
</script>