<template>
    <div class="body_color">
        <div class="login-title">列车旋转部件故障智能检测系统</div>
        <div id="register_title">注册</div>
        <a-row>
            <a-col :span="9"></a-col>
            <a-col :span="6">
                <!-- <a-form ref="formRef" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol"> -->
                <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
                    <!-- <a-form-item label="账号"> -->
                    <a-form-item>
                        <a-input v-model:value="email" type="email" placeholder="邮箱/用户名">
                            <template #prefix>
                                <UserOutlined />
                            </template>
                        </a-input>
                    </a-form-item>
                    <a-form-item block>
                        <a-input-password v-model:value="password" autocomplete="new-password" placeholder="6-16位密码，区分大小写">
                            <template #prefix>
                                <LockOutlined/>
                            </template>
                        </a-input-password>
                    </a-form-item>
                    <a-form-item block>
                        <a-input-password v-model:value="validpassword" placeholder="确认密码">
                            <template #prefix>
                                <LockOutlined/>
                            </template>
                        </a-input-password>
                    </a-form-item>
                    <a-form-item block>
                        <!-- <a-input v-model:value="form.phone_number" placeholder="11位手机号" /> -->
                        <a-input-group compact>
                            <a-select v-model:value="phone_pre" style="width: 30%" @focus="focus" ref="select" @change="handleChange">
                                <a-select-option value="+86">
                                    +86
                                </a-select-option>
                                <a-select-option value="海外电话">
                                    海外
                                </a-select-option>
                            </a-select>
                            <!-- <a-input style="width: 50%" v-model:value="value6" /> -->
                            <a-input v-model:value="phone_number" style="width:70%" placeholder="11位手机号" />
                        </a-input-group>
                    </a-form-item>
                    <a-row>
                        <a-col :span="15">
                            <a-form-item>
                                <a-input v-model:value="phone_validation" placeholder="输入验证码" />
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
                                <a-button type="primary" @click="handleRegisterClick" block>注册</a-button>
                            </a-form-item>
                        </a-col>
                        <a-col :span="6"></a-col>
                        <a-col :span="9">
                            <div class="block_item_register"></div>
                            <div class="block_item_register" @click="handleLoginClick">使用已有账户登录</div>
                        </a-col>
                    </a-row>
                </a-form>
            </a-col>
            <a-col :span="5"></a-col>
        </a-row>
    </div>
</template>
<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";

//注册相关逻辑
const useRegisterEffect = () => {
  const router = useRouter();
  const data = reactive({
    email: "",
    password: "",
    validpassword: "",
    phone_number: "",
    phone_validation: "",
    phone_pre: "+86"
  });
  const handleRegisterClick = () => {
    const {
      // email,
      password,
      validpassword,
      phone_number
      //   phone_validation,
      //   phone_pre
    } = data;
    // const formRef = toRef();
    // formRef.value.validate();
    if (password != validpassword) {
      alert("两次密码不相同");
    }
    if (phone_number.length > 11) {
      alert("手机号不合法");
    } else {
      router.push({ name: "login" });
    }
  };
  const {
    email,
    password,
    validpassword,
    phone_number,
    phone_validation,
    phone_pre
  } = toRefs(data);
  return {
    handleRegisterClick,
    email,
    password,
    validpassword,
    phone_number,
    phone_validation,
    phone_pre
  };
};
//登录跳转逻辑
const useLoginEffect = () => {
  const router = useRouter();
  const handleLoginClick = () => {
    router.push({ name: "login" });
  };
  return { handleLoginClick };
};
export default {
  name: "Login",
  components: {
    UserOutlined,
    LockOutlined
  },
  setup() {
    // const rules = {
    //   email: [
    //     {
    //       required: true,
    //       message: "Please input Activity name",
    //       trigger: "blur"
    //     }
    //   ]
    // };
    var labelCol = { span: 12 };
    var wrapperCol = { span: 24 };
    var current = ["mail"];
    const {
      handleRegisterClick,
      email,
      password,
      validpassword,
      phone_number,
      phone_validation,
      phone_pre
    } = useRegisterEffect();
    const { handleLoginClick } = useLoginEffect();
    return {
      handleRegisterClick,
      handleLoginClick,
      email,
      password,
      validpassword,
      phone_number,
      phone_validation,
      phone_pre,
      labelCol,
      wrapperCol,
      current
      //   rules
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
  color: rgba(24, 144, 255, 1);
}
.get_phone_code {
  font-size: 0.8em;
}
</style>