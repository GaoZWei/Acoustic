<template>
    <div class="vibration_component_add_form">
        <a-form :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-form-item label="编号">
                <a-input v-model:value="form.id" placeholder="给部件起个编号" />
            </a-form-item>
            <a-form-item label="型号">
                <a-input v-model:value="form.model" placeholder="给部件起个型号" />
            </a-form-item>
            <a-form-item label="部件类型">
                <a-radio-group v-model:value="form.type">
                    <a-radio value="bearing">
                        轴承
                    </a-radio>
                    <a-radio value="axle">
                        车轴
                    </a-radio>
                </a-radio-group>
            </a-form-item>
            <a-form-item label="传统检测方式">
                <a-switch v-model:checked="form.traditional" />
            </a-form-item>

            <a-form-item label="智能检测方式">
                <a-checkbox-group v-model:value="form.intelligent">
                    <a-checkbox value="dbn" name="intelligent">
                        DBN检测方式
                    </a-checkbox>
                    <a-checkbox value="lstm" name="intelligent">
                        LSTM检测方式
                    </a-checkbox>
                    <a-checkbox value="cnn" name="intelligent">
                        CNN检测方式
                    </a-checkbox>
                </a-checkbox-group>
            </a-form-item>
            <a-form-item label="部件描述">
                <a-textarea v-model:value="form.desc" placeholder="请输入对部件的描述" :rows="4" />
            </a-form-item>
            <a-form-item label="生产时间">
                <a-date-picker v-model:value="form.date" show-time type="date" placeholder="请选择时间" style="width: 100%;" />
            </a-form-item>
            <a-form-item label="部件类型(选填)">
                <a-input v-model:value="form.type_option" placeholder="请描述部件类型" />
            </a-form-item>
            <a-form-item>
                <a-row>
                    <a-col :span="12"></a-col>
                    <a-col :span="6">
                        <a-button type="primary" @click="onSubmit">
                            提交
                        </a-button>
                    </a-col>
                    <a-col :span="6">
                        <a-button style="margin-left: 10px;">
                            保存
                        </a-button>
                    </a-col>
                </a-row>
            </a-form-item>
        </a-form>
    </div>
</template>
<script>
export default {
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        id: "",
        model: "",
        type: "bearing",
        traditional: true,
        intelligent: ["dbn", "lstm"],
        desc: "",
        date: undefined,
        type_option: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!", this.form);
      console.log(this.form.id); //post
    }
  }
};
</script>
<style scoped>
.vibration_component_add_form {
  margin-top: 3%;
  margin-left: 20%;
  margin-top: 3%;
  margin-bottom: 5%;
}
</style>

