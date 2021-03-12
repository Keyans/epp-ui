<template>
  <div>
      <component :is="componentName" :templateConfig="templateConfig"></component>
  </div>
</template>

<script>
import { template } from "./config"
import testTemplate from "./epp-template/epp-template";

export default {
  components: { testTemplate },
  mixins:[template]
}
</script>

<style>

</style>