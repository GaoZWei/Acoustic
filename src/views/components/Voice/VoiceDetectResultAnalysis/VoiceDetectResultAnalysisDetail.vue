<template>
  <Breadcrumb/>
  <div>
    <a-row>
      <a-col :span="3">
        轴承编号<br/>
        <a-input v-model:value="detect_time" placeholder="1号车轴" />
      </a-col>
      <a-col :span="1"></a-col>
      <a-col :span="3">
        轴承类型<br/>
        <a-input v-model:value="detect_time" placeholder="圆柱滚子轴承" />
      </a-col>
      <a-col :span="1"></a-col>
      <a-col :span="2">
        是否故障<br/>-- 故障--
      </a-col>
      <a-col :span="1"></a-col>
      <a-col :span="3">
        使用时间<br/>
        <a-input v-model:value="detect_time" placeholder="2年11月" />
      </a-col>
      <a-col :span="3"></a-col>
      <a-col :span="7">
        上次更新时间:2020-10-31 11:40<br/>
        <a-button type="primary">
          停止检测
        </a-button>&nbsp;&nbsp;&nbsp;
        <a-button type="primary">
          <router-link to="/voice_fault_print">
            打印故障单
          </router-link>
        </a-button>
      </a-col>
    </a-row>
  </div>
  <div class="voice_detect_result_detail_table">
    <VoiceDetectResultAnalysisDetailTable/>
  </div>
  <div class="voice_detect_result_detail_realtime">
    <VoiceDetectResultAnalysisDetailWave/>
  </div>
  <div class="voice_detect_result_detail_analysis">
    <VoiceDetectResultAnalysisDetailAnalysis/>
  </div>
</template>

<script>
import Breadcrumb from "../../../components/Common/Breadcrumb.vue";
import VoiceDetectResultAnalysisDetailTable from "./VoiceDetectResultAnalysisDetailTable.vue";
import VoiceDetectResultAnalysisDetailWave from "./VoiceDetectResultAnalysisDetailWave.vue";
import VoiceDetectResultAnalysisDetailAnalysis from "./VoiceDetectResultAnalysisDetailAnalysis.vue";
export default {
  components: {
    Breadcrumb,
    VoiceDetectResultAnalysisDetailTable,
    VoiceDetectResultAnalysisDetailWave,
    VoiceDetectResultAnalysisDetailAnalysis
  },
  data() {
    return {
      detect_time: ""
    };
  }
};
</script>
<style scoped>
.voice_detect_result_detail_table {
  margin-top: 2%;
  margin-right: 4%;
}
.voice_detect_result_detail_realtime,
voice_detect_result_detail_analysis {
  /* border-top: 1px solid rgb(210, 210, 210); */
  margin-top: 5%;
}
</style>
