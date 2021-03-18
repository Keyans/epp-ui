<template>
  <div>
      <component is="componentName" ></component>
  </div>
</template>

<script>
import config from "./config";
import {inherit} from "../../../../../epp-ui/lib/epp-ui.common"
export default {
  mixins:[inherit(config)] 
}
</script>

<style>

</style>