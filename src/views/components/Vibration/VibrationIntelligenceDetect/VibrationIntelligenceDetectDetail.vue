<template>
  <div class="vibration_intelligence_detect_detail">
    <h2>LSTM检测方法</h2>
    <a-row>
      <a-col :span="4">
        检测时间<br/>
        <a-input v-model:value="detect_time" placeholder="2020-11-78 12:34" />
      </a-col>
      <a-col :span="4"></a-col>
      <a-col :span="4">
        是否故障
        <a-input v-model:value="is_Fault" placeholder="检测出故障" />
      </a-col>
      <a-col :span="8"></a-col>
    </a-row>
    <br/>
    <a-row>
      <a-col :span="14">
        <img src="../../../../assets/LSTM_pic.png">
      </a-col>
      <a-col :span="10">
        description
      </a-col>
    </a-row>
  </div>
  <div class="vibration_intelligence_detect_detail">
    <h2>DBN检测方法</h2>
    <a-row>
      <a-col :span="4">
        检测时间<br/>
        <a-input v-model:value="detect_time" placeholder="2020-11-78 12:34" />
      </a-col>
      <a-col :span="4"></a-col>
      <a-col :span="4">
        是否故障
        <a-input v-model:value="is_Fault" placeholder="检测出故障" />
      </a-col>
      <a-col :span="8"></a-col>
    </a-row>
    <br/>
    <a-row>
      <a-col :span="14">
        <img src="../../../../assets/DBN_pic.png">
      </a-col>
      <a-col :span="10">
        description
      </a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      detect_time: "",
      is_Fault: ""
    };
  }
};
</script>
<style scoped>
.vibration_intelligence_detect_detail {
  margin-top: 2%;
  padding: 2%;
  border-top: 1px solid rgb(210, 210, 210);
}
.vibration_intelligence_detect_detail_input {
  margin-top: 2%;
}
img {
  width: 90%;
  height: 90%;
}
</style>

