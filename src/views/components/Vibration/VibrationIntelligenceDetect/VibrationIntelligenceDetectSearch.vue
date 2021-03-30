<template>
    <Breadcrumb/>
    <div id="vibration_param_detect_search">
        <a-form :model="formInline" @submit="handleSubmit" @submit.prevent>
            <a-row>
                <a-col :span="12">
                    <a-input v-model:value="formInline.value" placeholder="请输入部件的编号/描述信息" /></a-col>
                <a-col :span="7">
                    <a-select v-model:value="formInline.type" placeholder="请选择" style="width:10.5em">
                        <a-select-option value="bearing">
                            轴承
                        </a-select-option>
                        <a-select-option value="axle">
                            车轴
                        </a-select-option>
                    </a-select>
                </a-col>
                <a-col :span="5">
                    <a-button type="primary" html-type="submit">
                        搜索
                    </a-button>
                </a-col>
            </a-row>
        </a-form>
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
      formInline: {
        value: "",
        id: "",
        type: "车轴",
        status: "请选择"
      }
    };
  },
  methods: {
    onSearch(value) {
      console.log("use value", value);
      console.log("or use this.value", this.value);
    },
    onChange(date, dateString) {
      console.log(date, dateString);
    },
    handleSubmit(e) {
      console.log(e);
      console.log(this.formInline);
    }
  }
};
</script>
<style scoped>
#vibration_param_detect_search {
  width: 50%;
  margin-top: 2%;
  margin-bottom: 4%;
  margin-left: 25%;
  margin-right: 25%;
}
</style>

