<template>
  <section class="env-switch-container">
    <div class="env-switch__entry">
      <nb-tooltip effect="dark" :content="tooltipContent">
        <i @click="onActivateConfig" class="nb-icon-s-tools" />
      </nb-tooltip>
    </div>
    <nb-drawer
      :visible.sync="visible"
      direction="rtl"
      title="环境切换"
    >
      <div class="env-switch__content">
        <nb-alert
          show-icon
          :closable="false"
          type="warning"
          title="环境设置提示"
          description="网关默认关闭，不启用泳道环境；若需要启用泳道环境，请先开启网关再配置泳道信息！"
        />
        <nb-form :model="controlForm" label-width="100px">
          <nb-form-item label="启用环境">
            <nb-tag v-if="currentEnvName" :label="currentEnvName" type="success" effect="plain" size="small">
              {{ currentEnvName }}
            </nb-tag>
            <span v-else>-</span>
          </nb-form-item>
          <nb-form-item label="开启网关" prop="switch">
            <nb-switch v-model="controlForm.switch" @change="onSwichChange" />
          </nb-form-item>
        </nb-form>
        <nb-form :disabled="!controlForm.switch" :model="envForm" :rules="rules" ref="envForm" label-width="100px">
          <nb-form-item label="切换环境" prop="featureEnv">
            <nb-select v-model="envForm.featureEnv" clearable>
              <nb-option
                v-for="item in envOptions"
                :key="item.env_id"
                :label="item.env_name"
                :value="item.env_id"
              />
            </nb-select>
          </nb-form-item>
          <nb-form-item>
            <nb-button type="primary" @click="onConfirm">确认</nb-button>
          </nb-form-item>
        </nb-form>
      </div>
    </nb-drawer>
  </section>
</template>

<script>
export default {
  name: 'eppEnvSwitch',

  props: {
    // 无极泳道环境接口
    featureEnvApi: {
      type: String,
      default: 'https://node.video.qq.com/x/api/wuji_public/object?appid=nbase_devops&schemaid=feature_env_boss&schemakey=bae6294ecab6464ebf233a91c74424b0',
    },
    // 网关地址
    gateway: {
      type: String,
      default: 'yztestboss.html5.qq.com',
    },
    // 被代理域名，默认当前域名
    interceptDomain: {
      type: String,
      default: window.location.host,
    },
    // 泳道环境 header
    featureEnvHeader: {
      type: String,
      default: 'polaris-env',
    },
  },

  data() {
    return {
      visible: false,
      currentEnvName: '',
      envMap: {},
      envOptions: [],
      controlForm: {
        switch: false,  // 网关开关
      },
      envForm: {
        featureEnv: '',  // 泳道环境
      },
      rules: {
        featureEnv: [{ required: true, message: '请选择泳道环境', trigger: 'blur' }],
      },
    };
  },

  computed: {
    tooltipContent() {
      return this.currentEnvName || '环境切换';
    },
  },

  mounted() {
    this.fetchEnvConfig();
  },

  methods: {
    onActivateConfig() {
      this.visible = true;
    },

    onSwichChange(isOn) {
      if (!isOn) {
        this.currentEnvName = '';
        this.envForm.featureEnv = '';
        this.resetXHROpen();
      }
    },

    onConfirm() {
      this.$refs.envForm.validate((valid) => {
        if (!valid) return false;
        this.currentEnvName = this.envMap[this.envForm.featureEnv] || '';
        // 先判断是否备份 XMLHttpRequest.prototype.open 方法
        // 如果备份过，需把劫持修改过的 open 方法重置，避免多次设置 setRequestHeader
        if (this.originXHROpen) this.resetXHROpen();
        // 劫持 XHR
        this.interceptXHR();
      });
    },

    isAbsoluteUrl(url = '') {
      return url.indexOf('://') > 0 || url.indexOf('//') === 0;
    },

    resetXHROpen() {
      window.XMLHttpRequest.prototype.open = this.originXHROpen;
    },

    storeXHROpen() {
      this.originXHROpen = window.XMLHttpRequest.prototype.open;
    },

    interceptXHR() {
      const { protocol } = window.location;
      if (protocol === 'file:' || !window.XMLHttpRequest) return;

      // 劫持修改前先备份 open 方法
      this.storeXHROpen();

      const self = this;
      const XHR = window.XMLHttpRequest;
      const oOpen = XHR.prototype.open;

      XHR.prototype.open = function (...args) {
        const [method, oUrl, ...restArgs] = args;
        let interceptUrl = oUrl;

        if (self.isAbsoluteUrl(interceptUrl)) {
          interceptUrl = interceptUrl.replace(self.interceptDomain, self.gateway);
        } else {
          // 相对路径
          interceptUrl = `${protocol}//${self.gateway}${oUrl}`;
        }

        oOpen.call(this, method, interceptUrl, ...restArgs);

        if (interceptUrl.includes(self.gateway)) {
          this.withCredentials = true;
          this.setRequestHeader(self.featureEnvHeader, self.envForm.featureEnv);
        }
      };
    },

    async fetchEnvConfig() {
      try {
        const { data = [] } = await fetch(this.featureEnvApi).then(res => res.json());
        if (!data || !data.length) {
          return;
        }
        this.envOptions = data;
        this.envMap = this.envOptions.reduce((acc, curr) => ({
          ...acc,
          [curr.env_id]: curr.env_name,
        }), {});
      } catch (error) {}
    },
  },
};
</script>

<style lang="scss" scoped>
.env-switch {
  &-container {
    position: relative;
  }

  &__entry {
    position: fixed;
    right: 5%;
    bottom: 5%;
    transition: all 300ms ease-in-out;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
      transform: scale(1.5);
    }
  }

  &__content {
    padding: 0 30px;

    /deep/ .nb-alert {
      margin: 40px 0;
    }
  }
}
</style>
