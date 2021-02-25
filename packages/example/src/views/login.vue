<style lang="scss">
@import "./login.scss";
</style>
<template>
  <div class="login" @keydown.enter="handleSubmit">
    <div class="login-con">
      <nb-card :bordered="false">
        <p slot="title">
          <i type="log-in"></i>
          欢迎登录
        </p>
        <div class="form-con">
          <nb-form ref="loginForm" :model="form" :rules="rules">
            <nb-form-item prop="userName">
              <nb-input v-model="form.userName" placeholder="请输入用户名">
                <span slot="prepend">
                  <i class="nb-icon-user-solid"></i>
                </span>
              </nb-input>
            </nb-form-item>
            <nb-form-item prop="password">
              <nb-input type="password" v-model="form.password" placeholder="请输入密码">
                <span slot="prepend">
                  <i class="nb-icon-lock"></i>
                </span>
              </nb-input>
            </nb-form-item>
            <nb-form-item>
                <nb-button @click="handleSubmit" type="primary">登录</nb-button>
            </nb-form-item>
          </nb-form>
        </div>
      </nb-card>
    </div>
  </div>
</template>

<script>
import Cookies from "js-cookie";
export default {
  data() {
    return {
      form: {
        userName: "",
        password: "",
      },
      rules: {
        userName: [
          { required: true, message: "账号不能为空", trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          Cookies.set("user", this.form.userName);
          this.$router.push({
            name: "home_index",
          });
        }
      });
    },
  },
};
</script>
