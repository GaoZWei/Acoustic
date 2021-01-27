<template>
  <Breadcrumb/>
  <h1>查询部件</h1>
  <div class="line"></div>
  <VoiceAttributeConfigSearch/>
  <VoiceAttributeConfigTable/>
</template>

<script>
import Breadcrumb from "../../Common/Breadcrumb.vue";
import VoiceAttributeConfigSearch from "./VoiceAttributeConfigSearch.vue";
import VoiceAttributeConfigTable from "./VoiceAttributeConfigTable.vue";
export default {
  components: {
    Breadcrumb,
    VoiceAttributeConfigSearch,
    VoiceAttributeConfigTable
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
