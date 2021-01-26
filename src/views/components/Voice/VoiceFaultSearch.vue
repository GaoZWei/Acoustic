<template>
    <Breadcrumb/>
    <div id="voice_fault_search">
        <a-row>
            <a-col :span="11">
                <a-input v-model:value="value" placeholder="请输入部件的编号/描述信息" /></a-col>
            <a-col :span="5">
                <a-select v-model:value="type" placeholder="请选择" style="width:10.5em">
                    <a-select-option value="bearing">
                        轴承
                    </a-select-option>
                    <a-select-option value="axle">
                        车轴
                    </a-select-option>
                </a-select>
            </a-col>
            <a-col :span="4">
                <a-button type="primary">
                    搜索
                </a-button>
            </a-col>
            <a-col :span="4">
                <a-button type="primary">
                    打印故障单
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
      type: "车轴"
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
#voice_fault_search {
  width: 50%;
  margin-top: 2%;
  margin-bottom: 4%;
  margin-left: 25%;
  margin-right: 25%;
}
</style>

