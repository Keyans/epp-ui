<template>
  <nb-button :class="['epp-button', {
    'epp-button--wide' : wide !== undefined
  }, {
    'epp-button--secondary' : type === 'secondary'
  }]" :type="type" :loading="loading" :disabled="disabled" :icon="icon" :size="size" :circle="circle" :plain="plain" :round="round" :native-type="nativeType" :autofocus="autofocus"><slot></slot></nb-button>
</template>

<script>
export default { 
  name: "EppButton",
  props: {
    type: {
      type: String,
      default: ""
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "small"
    },
    wide: {
      type: String
    },
    circle: {
      type: String
    },
    round: {
      type: String
    },
    plain: {
      type: String
    },
    nativeType: {
      type: String,
      default: "button"
    },
    autofocus: {
      type: Boolean,
      default: false
    }
  }
};
</script>


<style lang="scss">
.epp-button {
  $main-color: #0352DB;
  $main-color-disabled: #81a9ed;

  min-width: 80px;

  &.epp-button--wide {
    width: 240px;
  }
  &.epp-button--secondary {
    color: $main-color;
    border-color: $main-color;

    &:hover {
      color: #ffffff;
      border-color: $main-color;
      background-color: $main-color;
    }

    &.is-disabled, &.is-disabled:hover {
      border-color: $main-color-disabled;
      color: $main-color-disabled;
    }
  }

  &.nb-button--mini {
    padding: 5px 10px;
    min-width: 70px;
  }
}
</style>