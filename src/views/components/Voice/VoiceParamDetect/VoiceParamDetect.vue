<template>
  <VoiceParamDetectSearch/>
  <VoiceParamDetectRadio/>
  <VoiceParamDetectTable/>
  <img src="../../../../assets/param_detect.png" />
  <img src="../../../../assets/param_detect.png" />
</template>
<script>
import VoiceParamDetectSearch from "./VoiceParamDetectSearch.vue";
import VoiceParamDetectRadio from "./VoiceParamDetectRadio.vue";
import VoiceParamDetectTable from "./VoiceParamDetectTable.vue";
export default {
  components: {
    VoiceParamDetectSearch,
    VoiceParamDetectRadio,
    VoiceParamDetectTable
  }
};
</script>
