<template>
  <Breadcrumb/>
  <h1>添加部件</h1>
  <div class="line"></div>
  <VoiceComponentAddForm/>
</template>

<script>
import Breadcrumb from "../../Common/Breadcrumb";
import VoiceComponentAddForm from "./VoiceComponentAddForm.vue";
export default {
  components: {
    Breadcrumb,
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