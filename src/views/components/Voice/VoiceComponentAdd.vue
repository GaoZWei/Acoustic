<template>
  <a-breadcrumb style="margin: 0 0 2% 0">
    <a-breadcrumb-item>首页</a-breadcrumb-item>
    <a-breadcrumb-item>部件添加</a-breadcrumb-item>
  </a-breadcrumb>
  <h1>添加部件</h1>
  <div class="line"></div>
  <VoiceComponentAddForm/>
</template>

<script>
import VoiceComponentAddForm from "./VoiceComponentAddForm.vue";
export default {
  components: {
    VoiceComponentAddForm
  }
};
</script>

<style scoped>
.line {
  background-color: rgba(24, 144, 255, 1);
  height: 2px;
  width: 7%;
  margin-top: -0.5%;
  margin-bottom: 2%;
}
</style>