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
        <!-- <a-form :model="form" :label-col="labelCol" :wrapper-col="wrapperCol"> -->
        <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
          <!-- <a-form-item label="账号"> -->
          <a-form-item>
            <!-- <a-input v-model:value="form.name" placeholder="账户"> -->
            <a-input v-model:value="name" placeholder="账户">
              <template #prefix>
                <UserOutlined />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item block>
            <!-- <a-input-password autocomplete="new-password" v-model:value="form.password" placeholder="密码"> -->
            <a-input type="password" autocomplete="new-password" v-model:value="password" placeholder="密码">
              <template #prefix>
                <LockOutlined/>
              </template>
            </a-input>
          </a-form-item>
          <a-row>
            <a-col :span="8">
              <a-form-item>
                <!-- <a-checkbox-group v-model:value="form.type"> -->
                <a-checkbox-group>
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
          <a-button type="primary" @click="handleLogin" block>登录</a-button>
        </a-form>
      </a-col>
      <a-col :span="5"></a-col>
    </a-row>
    <div id="login_to_register" @click="handleRegisterClick">注册账户</div>
  </div>
</template>
<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { get } from "../../../utils/request.js";
// import { post } from "../../../utils/request.js";

const useLoginEffect = () => {
  const router = useRouter();
  const data = reactive({
    name: "",
    password: ""
  });
  const handleLogin = async () => {
    try {
      const { name, password } = data;
      console.log(name);
      console.log(password);
      const result = await get(
        `https://result.eolinker.com/8WmLt3ib3418debd511d5eee42ae1e659a3307d6da1de4d?uri=/database/istesting/${
          data.deviceCategory
        }/${data.deviceSno}`
      );
      //post的相关代码
      // const result = await post(
      //   "https://result.eolinker.com/8WmLt3ib3418debd511d5eee42ae1e659a3307d6da1de4d?uri=/database/istesting/",
      //   {
      //     name: data.name,
      //     password: data.password
      //   }
      // );
      console.log(result);
      if (result.message == "success") {
        localStorage.isLogin = true;
        router.push({ name: "index" });
      } else {
        alert("登录失败");
      }
    } catch (e) {
      console.log(e);
    }
  };
  const { name, password } = toRefs(data);
  return { name, password, handleLogin };
};

const useRegisterEffect = () => {
  const router = useRouter();
  const handleRegisterClick = () => {
    router.push({ name: "register" });
  };
  return { handleRegisterClick };
};

export default {
  name: "Login",
  components: {
    UserOutlined,
    LockOutlined
  },
  setup() {
    var labelCol = { span: 12 };
    var wrapperCol = { span: 24 };
    var current = ["mail"];
    const { name, password, handleLogin } = useLoginEffect();
    const { handleRegisterClick } = useRegisterEffect();
    return {
      name,
      password,
      handleLogin,
      handleRegisterClick,
      current,
      labelCol,
      wrapperCol
    };
  }
  // data() {
  //   return {
  //     current: ["mail"],
  //     labelCol: { span: 12 },
  //     wrapperCol: { span: 24 }
  //     // form: {
  //     //   name: "",
  //     //   password: ""
  //     // }
  //   };
  // }
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