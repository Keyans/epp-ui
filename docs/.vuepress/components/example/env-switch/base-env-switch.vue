<template>
  <epp-env-switch
    v-if="showEnvSwitch"
    :gateway="gateway"
    :feature-env-api="featureEnvApi"
    :feature-env-header="featureEnvHeader"
    :intercept-domain="interceptDomain"
  />
</template>

<script>
export default {
  data() {
    return {
      // 网关地址
      gateway: 'yztestboss.html5.qq.com',
      // 无极泳道环境接口
      featureEnvApi: 'https://node.video.qq.com/x/api/wuji_public/object?appid=nbase_devops&schemaid=feature_env_boss&schemakey=bae6294ecab6464ebf233a91c74424b0',
      // 泳道环境 header
      featureEnvHeader: 'polaris-env',
      // 被代理域名，根据实际使用场景设置
      interceptDomain: 'yztestboss.sparta.html5.qq.com',
    };
  },

  computed: {
    showEnvSwitch() {
      // 根据 NODE_ENV 判断不一定准确，请根据项目实际情况做判断
      // const { NODE_ENV = 'development' } = process.env || {};
      // return NODE_ENV === 'development';
      return true;
    },
  },
}
</script>

<style lang="scss" scoped>
/deep/ .env-switch {
  &__entry {
    position: static;

    &:hover {
      transform: none;
    }
  }
}
</style>