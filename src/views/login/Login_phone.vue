<template>
  <div class="body_color">
    <div class="login-title">列车旋转部件故障智能检测系统</div>
    <div id="login-way">
      <a-menu v-model:selectedKeys="current" mode="horizontal" class="body_color">
        <a-menu-item key="mail">
          <router-link to="/login"> 账号密码登录&nbsp;&nbsp;&nbsp;</router-link>
        </a-menu-item>
        <a-menu-item key="phone">
          <router-link to="/login_phone">手机号登录</router-link>
        </a-menu-item>
      </a-menu>
    </div>
    <a-row>
      <a-col :span="9"></a-col>
      <a-col :span="6">
        <a-form :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
          <!-- <a-form-item label="账号"> -->
          <a-form-item>
            <a-input placeholder="手机号" v-model:value="form.phone_number" ref="userNameInput">
              <template #prefix>
                <MobileOutlined />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-row>
              <a-col :span="14">
                <a-input v-model:value="form.password" placeholder="验证码" /></a-col>
              <a-col :span="2"></a-col>
              <a-col :span="8">
                <a-button @click="onSubmit" block class="get_phone_code">
                  <router-link to="/">获取验证码</router-link>
                </a-button>
              </a-col>
            </a-row>
          </a-form-item>
          <a-row>
            <a-col :span="8">
              <a-form-item>
                <a-checkbox-group v-model:value="form.type">
                  <a-checkbox value="1" name="type">
                    自动登录
                  </a-checkbox>
                </a-checkbox-group>
              </a-form-item>
            </a-col>
            <a-col :span="11"></a-col>
            <a-col :span="5">
              <div class="block_item"></div>
              <a href="/forget">忘记密码</a>
            </a-col>
          </a-row>
          <a-button type="primary" @click="onSubmit" block>
            <router-link to="/">登录</router-link>
          </a-button>
        </a-form>
      </a-col>
      <a-col :span="5"></a-col>
    </a-row>
    <div id="login_to_register">
      <a href="/register">注册账户</a>
    </div>
  </div>
</template>
<script>
import { MobileOutlined } from "@ant-design/icons-vue";
export default {
  name: "Login",
  components: {
    MobileOutlined
  },
  data() {
    return {
      current: ["phone"],
      labelCol: { span: 12 },
      wrapperCol: { span: 24 },
      form: {
        phone_number: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!", this.form);
    }
  }
};
</script>

<style scoped>
.body_color {
  background-color: rgb(240, 242, 245);
}
.login-title {
  text-align: center;
  font-size: 2.5em;
  font-family: PingFang SC;
  font-weight: bold;
  margin-top: 10%;
  margin-bottom: 2%;
}
#login-way {
  color: rgba(0, 0, 0, 0.65);
  margin-bottom: 2%;
  margin-left: 40%;
  margin-right: 40%;
}
.login-way-item {
  color: rgba(24, 144, 255, 1);
}
.line {
  background-color: rgba(24, 144, 255, 1);
  height: 2px;
  width: 32%;
  margin-top: 2%;
}
/* 偏移 */
.block_item {
  margin-top: 2%;
  height: 10%;
}
#login_to_register {
  height: 15em;
  margin-top: 2%;
  margin-bottom: 10%;
  margin-left: 57%;
}
</style>