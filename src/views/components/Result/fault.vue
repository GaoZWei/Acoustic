<template>
    <Breadcrumb/>
    <div class="fault">
        <icon-font type="icon-icon-test" class="fault_icon" />
        <h1>提交失败</h1>
        <div class="fault_desc">
            请核对并修改以下信息后，再重新提交。
        </div>
        <div class="fault_progress">
            <h4>您提交的内容有如下错误：</h4>
            <a-row style="margin-top:2%">
                <a-col :span="7">
                    <icon-font type="icon-iconfront-mistake" class="fault_icon_item" /> 你的账户已被冻结
                </a-col>
                <a-col :span="7">
                    <router-link to="/"> 立即解冻 ></router-link>
                </a-col>
                <a-col :span="9" />
            </a-row>
            <a-row style="margin-top:2%">
                <a-col :span="7">
                    <icon-font type="icon-iconfront-mistake" class="fault_icon_item" /> 你的账户还不具备申请资格
                </a-col>
                <a-col :span="7">
                    <router-link to="/"> 立即解冻 ></router-link>
                </a-col>
                <a-col :span="9" />
            </a-row>
        </div>
        <div class="fault_btn">
            <a-row>
                <a-col :span="10"></a-col>
                <a-col :span="4">
                    <a-button type="primary">返回修改</a-button>
                </a-col>
                <a-col :span="3">
                </a-col>
            </a-row>
        </div>
    </div>
</template>
<script>
import Breadcrumb from "../../components/Common/Breadcrumb";
import { createFromIconfontCN } from "@ant-design/icons-vue";
const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2337538_8demkl9z2wd.js"
});
export default {
  components: {
    Breadcrumb,
    IconFont
  }
};
</script>

<style scoped>
.fault_icon {
  font-size:7em;
  margin-left: 42.5%;
}
.fault_icon_item {
  font-size: 1.3em;
  /* margin-top: 3%; */
}
.fault {
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 4%;
  margin-bottom: 15%;
  padding: 3%;
  /* border: 1px solid rgba(210, 210, 210, 0.5); */
}

.fault h1 {
  margin-top: 2%;
  font-size: 2em;
  color: rgba(0, 0, 0, 0.85);
  text-align: center;
}
.fault_desc {
  color: rgba(0, 0, 0, 0.45);
  text-align: center;
}
.fault_progress {
  margin-top: 5%;
  margin-bottom: 2%;
}
.fault_btn {
  margin-top: 5%;
  margin-bottom: 5%;
}
</style>
