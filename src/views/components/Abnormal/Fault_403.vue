<template>
  <div class="fault_layout">
    <a-row>
      <a-col :span="2"></a-col>
      <a-col :span="10">
        <img src="../../../assets/fault_500.png" />
        <!-- <falutSvg class="icon" /> -->
      </a-col>
      <a-col :span="2"></a-col>
      <a-col :span="8">
        <span class="fault_code">403</span> <br/>
        <span class="fault_description">抱歉，你无权访问该页面</span><br/>
        <br/>
        <a-button type="primary" class="fault_button">
          <router-link to="/">返回首页</router-link>
        </a-button>
      </a-col>
      <a-col :span="2"></a-col>
    </a-row>
  </div>
</template>
<script>
// import falutSvg from "../../../assets/fault_svg.svg";
// export default {
//   components: {
//     falut_svg
//   }
// };
</script>

<style scoped>
.fault_layout {
  margin-top: 10%;
  margin-bottom: 25%;
}
.fault_layout img {
  width: 100%;
}
.fault_code {
  font-size: 6em;
}
.fault_description {
  margin-left: 6%;
  color: rgba(0, 0, 0, 0.45);
}
.fault_button {
  margin-left: 5%;
}
.icon {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
}
</style>

