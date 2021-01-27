<template>
    <div class="vibration_fault">
        <a-row>
            <a-col :span="4">
                <h1>基本信息</h1>
                <div class="line"></div>
            </a-col>
            <a-col :span="15"></a-col>
            <a-col :span="5">
                生成时间:2020-12-11 11:40
            </a-col>
        </a-row>
        <a-row style="margin-top:2%">
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
            <a-col :span="1"></a-col>
            <a-col :span="3">
                检测时间<br/>
                <a-input v-model:value="detect_time" placeholder="2020-12-11 11:40" />
            </a-col>
        </a-row>
    </div>
    <div class="result_analysis">
        <h1>时域指标分析</h1>
        <a-row>
            <a-col :span="5">
                均值<br/>
                <a-input v-model:value="value" placeholder="2.5" />
            </a-col>
            <a-col :span="1" />
            <a-col :span="5">
                均方根值<br/>
                <a-input v-model:value="value" placeholder="2.5" />
            </a-col>
            <a-col :span="1" />
            <a-col :span="5">
                峰值<br/>
                <a-input v-model:value="value" placeholder="3.25" />
            </a-col>
            <a-col :span="1" />
            <a-col :span="5">
                峭度值<br/>
                <a-input v-model:value="value" placeholder="3.5" />
            </a-col>
            <a-col :span="1" />
        </a-row>
        <a-row style="margin-top:2%">
            <a-col :span="5">
                脉冲因数<br/>
                <a-input v-model:value="value" placeholder="3.5" />
            </a-col>
            <a-col :span="1" />
            <a-col :span="5">
                波形因数<br/>
                <a-input v-model:value="value" placeholder="3.52" />
            </a-col>
            <a-col :span="1" />
            <a-col :span="5">
                峰值指标<br/>
                <a-input v-model:value="value" placeholder="1.5" />
            </a-col>
            <a-col :span="7" />
        </a-row>
    </div>
    <div class="traditional_detect_analysis">
        <h1>传统检测方式分析</h1>
        <a-row>
            <a-col :span="5">
                信号源<br/>
                <a-input v-model:value="value" placeholder="振动信号" />
            </a-col>
            <a-col :span="1"></a-col>
            <a-col :span="5">
                故障类型<br/>
                <a-input v-model:value="value" placeholder="内圈故障" />
            </a-col>
        </a-row>
        <a-row style="margin-top:3%">
            <a-col :span="6">
                <img src="../../../../assets/fault01.png" />
            </a-col>
            <a-col :span="10">对内圈故障以及传统检测方式的描述</a-col>
        </a-row>
    </div>
    <div class="traditional_detect_analysis">
        <h1>LSTM检测方式分析</h1>
        <a-row>
            <a-col :span="5">
                信号源<br/>
                <a-input v-model:value="value" placeholder="振动信号" />
            </a-col>
            <a-col :span="1"></a-col>
            <a-col :span="5">
                故障类型<br/>
                <a-input v-model:value="value" placeholder="内圈故障" />
            </a-col>
        </a-row>
        <a-row style="margin-top:3%">
            <a-col :span="6">
                <img src="../../../../assets/LSTM_pic.png" />
            </a-col>
            <a-col :span="10">对内圈故障以及传统检测方式的描述</a-col>
        </a-row>
    </div>
</template>
<script>
export default {
  data() {
    return {
      detect_time: "",
      value:""
    };
  }
};
</script>
<style scoped>
.vibration_fault {
  margin-top: 2%;
  padding: 2%;
  border-top: 1px solid rgb(210, 210, 210);
}
.line {
  background-color: rgba(24, 144, 255, 1);
  height: 2px;
  width: 40%;
  margin-top: 2%;
}
.result_analysis,
.traditional_detect_analysis {
  margin-top: 2%;
  padding: 2%;
  border-top: 1px solid rgba(210, 210, 210, 0.6);
}
img {
  width: 90%;
  height: 90%;
}
</style>
