<template>
    <div class="body_color">
        <div class="login-title">列车旋转部件故障智能检测系统</div>
        <div id="register_title">注册</div>
        <a-row>
            <a-col :span="9"></a-col>
            <a-col :span="6">
                <a-form :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
                    <!-- <a-form-item label="账号"> -->
                    <a-form-item>
                        <a-input v-model:value="form.email" placeholder="邮箱" />
                    </a-form-item>
                    <a-form-item block>
                        <a-input-password v-model:value="form.password" placeholder="6-16位密码，区分大小写" />
                    </a-form-item>
                    <a-form-item block>
                        <a-input-password v-model:value="form.password" placeholder="确认密码" />
                    </a-form-item>
                    <a-form-item block>
                        <!-- <a-input v-model:value="form.phone_number" placeholder="11位手机号" /> -->

                        <a-input-group compact>
                            <a-select v-model:value="form.phone_pre" style="width: 30%" @focus="focus" ref="select" @change="handleChange">
                                <a-select-option value="+86">
                                    +86
                                </a-select-option>
                                <a-select-option value="海外电话">
                                    海外
                                </a-select-option>
                            </a-select>
                            <!-- <a-input style="width: 50%" v-model:value="value6" /> -->
                            <a-input v-model:value="form.phone_number" style="width:70%" placeholder="11位手机号" />
                        </a-input-group>
                    </a-form-item>
                    <a-row>
                        <a-col :span="15">
                            <a-form-item>
                                <a-input v-model:value="form.phone_validation" placeholder="输入验证码" />
                            </a-form-item>
                        </a-col>
                        <a-col :span="2"></a-col>
                        <a-col :span="7">
                            <div class="block_item_register"></div>
                            <a-button @click="onSubmit" block class="get_phone_code">
                                <router-link to="/">获取验证码</router-link>
                            </a-button>
                        </a-col>
                    </a-row>
                    <a-row>
                        <a-col :span="9">
                            <a-form-item>
                                <a-button type="primary" @click="onSubmit" block>
                                    <router-link to="/">注册</router-link>
                                </a-button>
                            </a-form-item>
                        </a-col>
                        <a-col :span="6"></a-col>
                        <a-col :span="9">
                            <div class="block_item_register"></div>
                            <a href="/login">使用已有账户登录</a>
                        </a-col>
                    </a-row>
                </a-form>
            </a-col>
            <a-col :span="5"></a-col>
        </a-row>
    </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      current: ["mail"],
      labelCol: { span: 12 },
      wrapperCol: { span: 24 },
      form: {
        email: "",
        password: "",
        phone_number: "",
        phone_validation: "",
        phone_pre: "+86"
      }
    };
  },
  methods: {
    focus() {
      console.log("focus");
    },
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    onSubmit() {
      console.log("submit!", this.form);
    }
  }
};
</script>

<style scoped>
.body_color {
  background-color: rgb(240, 242, 245);
  height: 50em;
}
.login-title {
  text-align: center;
  font-size: 2.5em;
  font-family: PingFang SC;
  font-weight: bold;
  margin-top: 10%;
  margin-bottom: 2%;
}
#register_title {
  color: rgba(0, 0, 0, 0.65);
  margin-bottom: 0.5%;
  margin-left: 37.5%;
}
.login-way-item {
  color: rgba(24, 144, 255, 1);
}
/* 偏移 */
.block_item_register {
  margin-top: 3%;
  height: 4%;
}
.get_phone_code {
  font-size: 0.8em;
}
</style>