<template>
  <Breadcrumb/>
  <h1>历史故障查询</h1>
  <div id="history_fault_search">
    <a-input-search v-model:value="value" placeholder="请输入部件的编号/描述信息" enter-button="搜索" @search="onSearch" />
  </div>
</template>

<script>
import Breadcrumb from "../../Common/Breadcrumb.vue";
export default {
   components: {
    Breadcrumb
  },
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onSearch(value) {
      console.log("use value", value);
      console.log("or use this.value", this.value);
    }
  }
};
</script>
<style>
#history_fault_search {
  width: 50%;
  margin-top: 2%;
  margin-bottom: 4%;
  margin-left: 25%;
  margin-right: 25%;
}
</style>

