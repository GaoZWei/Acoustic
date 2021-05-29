<template>
  <!-- <a-form layout="inline" :model="formInline" @submit="handleSubmit" @submit.native.prevent> -->
  <a-form :model="formInline" @submit="handleSubmit" @submit.prevent>
    <a-row>
      <a-col :span="8">
        <a-form-item label="部件编号">
          <a-input v-model:value="formInline.id" placeholder="部件编号" style="width:18em">
          </a-input>
        </a-form-item>
      </a-col>
      <a-col :span="5">
        <a-form-item label="类型">
          <a-select v-model:value="formInline.type" placeholder="请选择" style="width:10em">
            <a-select-option value="bearing">
              轴承
            </a-select-option>
            <a-select-option value="axle">
              车轴
            </a-select-option>
          </a-select>
        </a-form-item>
      </a-col>

      <a-col :span="7">
        <a-form-item label="状态">
          <a-select v-model:value="formInline.status" placeholder="请选择" style="width:15em">
            <a-select-option value="close">
              关闭
            </a-select-option>
            <a-select-option value="open">
              运行
            </a-select-option>
            <a-select-option value="all">
              全部
            </a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :span="2">
        <a-form-item>
          <!-- <a-button type="primary" html-type="submit" :disabled="formInline.id === '' || formInline.type === ''"> -->
          <a-button type="primary" html-type="submit" block>
            查询
          </a-button>
        </a-form-item>
      </a-col>
      <a-col :span="2">
        <a-form-item>
          <router-link to="/vibration_component_add">
            <a-button type="primary" html-type="submit" block>
              <PlusOutlined /> 新建
            </a-button>
          </router-link>
        </a-form-item>
      </a-col>
    </a-row>
  </a-form>

</template>
<script>
import { PlusOutlined } from "@ant-design/icons-vue";
export default {
  components: {
    PlusOutlined
  },
  data() {
    return {
      formInline: {
        id: "",
        type: "请选择",
        status: "请选择"
      }
    };
  },
  methods: {
    handleSubmit(e) {
      console.log(e);
      console.log(this.formInline);
    }
  }
};
</script>
