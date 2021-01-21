<template>
  <h1>故障分类</h1>
  <div class="line"></div>
  <a-row style="margin-top:3%">
    <a-col :span="6"> <img src="../../../assets/fault01.png" /></a-col>
    <a-col :span="2"></a-col>
    <a-col :span="6"> <img src="../../../assets/fault02.png" /></a-col>
    <a-col :span="2"></a-col>
    <a-col :span="6"> <img src="../../../assets/fault03.png" /></a-col>
    <a-col :span="2"></a-col>
  </a-row>
</template>
<style scoped>
h1 {
  margin-top: 2%;
}
img {
  width: 85%;
  height: 85%;
}
.line {
  background-color: rgba(24, 144, 255, 1);
  height: 2px;
  width: 7%;
  margin-top: -0.5%;
  margin-bottom: 2%;
}
</style>