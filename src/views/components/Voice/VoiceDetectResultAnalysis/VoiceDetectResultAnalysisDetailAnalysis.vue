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
    <a-row style="margin:2%">
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
</template>

<script>
export default {
  data() {
    return {
      value: "",
      time_value: []
    };
  },
  methods: {
    onSearch(value) {
      console.log("use value", value);
      console.log("or use this.value", this.value);
    },
    onChange(date, dateString) {
      console.log(date, dateString);
    }
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

