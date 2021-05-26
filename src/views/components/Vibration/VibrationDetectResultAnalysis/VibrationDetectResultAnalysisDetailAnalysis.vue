<template>
  <div class="time_scope_analysis">
    <a-row>
      <a-col :span="4">
        <h1>时域指标分析</h1>
      </a-col>
      <a-col :span="14"></a-col>
      <a-col :span="6">上次更新时间:2020-10-31 11:40</a-col>
    </a-row>
    <a-row style="margin:2%">
      <a-col :span="5">
        均值<br/>
        <a-input v-model:value="list.mean" placeholder="2.5" />
      </a-col>
      <a-col :span="1" />
      <a-col :span="5">
        方差<br/>
        <a-input v-model:value="list.variance" placeholder="2.5" />
      </a-col>
      <a-col :span="1" />
      <a-col :span="5">
        标准差<br/>
        <a-input v-model:value="list.standardDeviation" placeholder="3.25" />
      </a-col>
      <a-col :span="1" />
      <a-col :span="5">
        均方根值<br/>
        <a-input v-model:value="list.rootMeanSquareValue" placeholder="3.5" disabled/>
      </a-col>
      <a-col :span="1" />
    </a-row>
    <a-row style="margin:2%">
      <a-col :span="5">
        峰值指标Xp<br/>
        <a-input v-model:value="list.peakMetric" placeholder="3.5" />
      </a-col>
      <a-col :span="1" />
      <a-col :span="5">
        峭度值<br/>
        <a-input v-model:value="list.kurtosis" placeholder="3.52" />
      </a-col>
      <a-col :span="1" />
      <a-col :span="5">
        偏度值<br/>
        <a-input v-model:value="list.skewness" placeholder="1.5" />
      </a-col>
      <a-col :span="1" />
      <a-col :span="5">
        绝对平均值<br/>
        <a-input v-model:value="list.absoluteMean" placeholder="3.5" />
      </a-col>
      <a-col :span="1" />
    </a-row>
    <a-row style="margin:2%">
      <a-col :span="5">
        方根幅度Xr<br/>
        <a-input v-model:value="list.rootAmplitude" placeholder="3.5" />
      </a-col>
      <a-col :span="1" />
      <a-col :span="5">
        裕度因子<br/>
        <a-input v-model:value="list.marginFactor" placeholder="3.52" />
      </a-col>
      <a-col :span="1" />
      <a-col :span="5">
        峰值因子<br/>
        <a-input v-model:value="list.peakFactor" placeholder="1.5" />
      </a-col>
      <a-col :span="1" />
      <a-col :span="5">
        波形因子<br/>
        <a-input v-model:value="list.waveformFactor" placeholder="3.5" />
      </a-col>
      <a-col :span="1" />
    </a-row>
    <a-row style="margin:2%">
      <a-col :span="5">
        脉冲因子<br/>
        <a-input v-model:value="list.impulseFactor" placeholder="3.5" />
      </a-col>
      <a-col :span="1" />
    </a-row>
  </div>
</template>

<script>
import { reactive, toRefs, watchEffect } from "vue";
import { get } from "../../../../utils/request.js";
// 时域指标相关逻辑
const vibrationDetectDetailDataEffect = () => {
  const data = reactive({
    list: {}
  });
  const getDetailData = async () => {
    const rusult = await get(
      // `https://result.eolinker.com/8WmLt3ib3418debd511d5eee42ae1e659a3307d6da1de4d?uri=/database/query/detection/description/${deviceCategory}/${deviceSno}/${deviceWay}`
      `https://result.eolinker.com/8WmLt3ib3418debd511d5eee42ae1e659a3307d6da1de4d?uri=/database/query/detection/description/1/1/1`
    );
    const list = rusult.data;
    for (let i in list) {
      list[i] = list[i].toFixed(2);
    }
    data.list = list;
  };
  watchEffect(() => {
    getDetailData();
  });
  //自动感知代码变化
  const { list } = toRefs(data);
  return { list };
};
export default {
  // data() {
  //   return {
  //     value: "",
  //     time_value: []
  //   };
  // },
  // methods: {
  //   onSearch(value) {
  //     console.log("use value", value);
  //     console.log("or use this.value", this.value);
  //   },
  //   onChange(date, dateString) {
  //     console.log(date, dateString);
  //   }
  // }
  name: "VibrationDetectResultAnalysisDetailAnalysis",
  setup() {
    const { list } = vibrationDetectDetailDataEffect();
    return {
      list
    };
  }
};
</script>
<style scoped>
.time_scope_analysis {
  background-color: white;
  margin-top: 2%;
  margin-bottom: 4%;
  padding: 2%;
  width: 100%;
  border: 1px solid rgb(210, 210, 210);
}
</style>

