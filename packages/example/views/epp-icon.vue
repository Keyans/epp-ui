<template>
  <svg class="icon" aria-hidden="true" :style="style">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
import  '../assets/icon/iconfont.js';
export default {
  props: {
    icon: {
      type: String,
      default: '',
    },
    size: {
      type: Number,
      default: 20,
    },
  },
  computed: {
    style() {
      return {
        fontSize: `${this.size}px`,
      };
    },
    iconName() {
      return `#icon${this.icon}`;
    },
  },
};
</script>
<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
