<template>
  <Breadcrumb/>
  <div>
    <a-row>
      <a-col :span="3">
        轴承编号<br/>
        <a-input v-model:value="devicesno" placeholder="1号车轴" />
      </a-col>
      <a-col :span="1"></a-col>
      <a-col :span="3">
        轴承类型<br/>
        <a-input v-model:value="devicecategory" placeholder="圆柱滚子轴承" />
      </a-col>
      <a-col :span="1"></a-col>
      <a-col :span="2">
        是否故障<br/>-- 故障--
      </a-col>
      <a-col :span="1"></a-col>
      <a-col :span="3">
        使用时间<br/>
        <a-input v-model:value="devicecategory" placeholder="2年11月" />
      </a-col>
      <a-col :span="3"></a-col>
      <a-col :span="7">
        上次更新时间:2020-10-31 11:40<br/>
        <a-button type="primary" @click="()=>handleDetectChange(isDetecting)">
          {{isDetecting?'停止检测':'开始检测'}}
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

import { reactive, toRefs } from "vue";
import { get } from "../../../../utils/request.js";
//声信号检测结果相关逻辑
const voiceDetectResultEffect = () => {
  const data = reactive({
    isDetecting: false,
    devicesno: "",
    devicecategory: ""
  });
  //判断该设备是否正在检测中
  const getDetect = async () => {
    const result = await get(
      `https://result.eolinker.com/8WmLt3ib3418debd511d5eee42ae1e659a3307d6da1de4d?uri=/database/istesting/{devicecategory}/{devicesno}`
    );
    if (result.retCode == 1) {
      data.isDetecting = true;
    } else if (result.retCode == 0) {
      data.isDetecting = false;
    }
  };
  const handleDetectChange = async isDetecting => {
    if (!data.isDetecting) {
      const result = await get(
        `https://result.eolinker.com/8WmLt3ib3418debd511d5eee42ae1e659a3307d6da1de4d?uri=/database/startdevicedecetion/${devicecategory}/${devicesno}`
      );
      if (result.retCode == 200) {
        console.log("开始检测");
        data.isDetecting = !isDetecting;
      }
    } else {
      const result = await get(
        `https://result.eolinker.com/8WmLt3ib3418debd511d5eee42ae1e659a3307d6da1de4d?uri=/database/stopdevicedecetion/{devicecategory}/{devicesno}`
      );
      if (result.retCode == 200) {
        console.log("结束检测");
        data.isDetecting = !isDetecting;
      } else {
        console.log(result);
      }
    }
  };
  const { isDetecting, devicesno, devicecategory } = toRefs(data);
  return {
    isDetecting,
    devicesno,
    devicecategory,
    getDetect,
    handleDetectChange
  };
};

export default {
  components: {
    Breadcrumb,
    VoiceDetectResultAnalysisDetailTable,
    VoiceDetectResultAnalysisDetailWave,
    VoiceDetectResultAnalysisDetailAnalysis
  },
  setup() {
    const {
      isDetecting,
      devicesno,
      devicecategory,
      getDetect,
      handleDetectChange
    } = voiceDetectResultEffect();
    getDetect();
    return {
      isDetecting,
      devicesno,
      devicecategory,
      handleDetectChange
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
