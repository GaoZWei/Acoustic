<template>
  <Breadcrumb/>
  <h1>时间范围搜索</h1>
  <div id="time_scope_search">
    <a-row>
      <a-col :span="7">
        <a-input v-model:value="value" placeholder="输入轴承的编号" /></a-col>
      <a-col :span="13">
        <a-range-picker v-model:value="time_value" @change="onChange" />
      </a-col>
      <a-col :span="4">
        <a-button type="primary">
          搜索
        </a-button>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Breadcrumb from "../Common/Breadcrumb.vue";
export default {
  components: {
    Breadcrumb
  },
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
#time_scope_search {
  width: 50%;
  margin-top: 2%;
  margin-bottom: 4%;
  margin-left: 25%;
  margin-right: 25%;
}
</style>

