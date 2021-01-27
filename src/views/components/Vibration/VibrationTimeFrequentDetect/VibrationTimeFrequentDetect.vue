<template>
  <VibrationTimeFrequentDetectSearch/>
  <VibrationTimeFrequentDetectRadio/>
  <div class="time_frequent_pic">
    <h1>时域波形测量</h1>
    <img src="../../../../assets/time_frequent_wave_measure.png" />
  </div>
  <div class="time_frequent_pic">
    <h1>自功率谱APSs</h1>
    <img src="../../../../assets/aps.png" />
  </div>
</template>
<script>
import VibrationTimeFrequentDetectSearch from "./VibrationTimeFrequentDetectSearch.vue";
import VibrationTimeFrequentDetectRadio from "./VibrationTimeFrequentDetectRadio.vue";
export default {
  components: {
    VibrationTimeFrequentDetectSearch,
    VibrationTimeFrequentDetectRadio
  }
};
</script>
<style scoped>
.time_frequent_pic {
  margin-top: 3%;
  padding: 2%;
  border-top: 1px solid rgba(210, 210, 210, 0.6);
}
.time_frequent_pic h1 {
  color: rgba(177, 19, 19, 1);
}
.time_frequent_pic img {
  width: 85%;
}
</style>
