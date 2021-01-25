<template>
    <Breadcrumb/>
    <div class="voice_attribute_config_detail">
        <div>
            <h1>基本属性</h1>
            <a-row style="margin-top:2%">
                <a-col :span="8">部件编号:1000000000</a-col>
                <a-col :span="8">部件型号:000000001</a-col>
                <a-col :span="8">部件类别:车轴</a-col>
            </a-row>
            <a-row style="margin-top:2%">
                <a-col :span="8">信号类型：声信号</a-col>
                <a-col :span="8">部件类型:圆柱滚子轴承</a-col>
                <a-col :span="8">创建时间:2020-12-14 9:20</a-col>
            </a-row>
            <a-row style="margin-top:2%">
                <a-col :span="8">生产时间：2019-12-14</a-col>
                <a-col :span="16"></a-col>
            </a-row>
        </div>
        <div>
            <h1>检测信息配置</h1>
            <a-form :model="form">
                <a-form-item label="部件描述">
                    <a-textarea v-model:value="form.desc" placeholder="对部件的描述" :rows="1" />
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
                <a-form-item label="参数检测方式">
                    <a-switch v-model:checked="form.traditional" />
                </a-form-item>
                <a-form-item label="是否停止检测：">
                    <a-switch v-model:checked="form.traditional" />
                </a-form-item>
                <a-form-item label="通道数">
                    <a-select v-model:value="form.channel" placeholder="请选择" style="width:10.5em">
                        <a-select-option value="channel_one">
                            通道1
                        </a-select-option>
                        <a-select-option value="channel_two">
                            通道2
                        </a-select-option>
                        <a-select-option value="channel_three">
                            通道3
                        </a-select-option>
                        <a-select-option value="channel_four">
                            通道4
                        </a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item>
                    <a-row>
                        <a-col :span="10"></a-col>
                        <a-col :span="6">
                            <a-button type="primary" @click="onSubmit">
                                保存
                            </a-button>
                        </a-col>
                        <a-col :span="8"></a-col>
                    </a-row>
                </a-form-item>
            </a-form>
        </div>
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
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        id: "",
        model: "",
        type: "bearing",
        type1: "",
        traditional: true,
        intelligent: ["dbn", "lstm"],
        desc: "",
        date: undefined,
        type_option: "",
        channel: "channel_one"
      }
    };
  },
  methods: {
     onSubmit() {
      console.log("submit!", this.form);
    }
  }
};
</script>
<style scoped>
h1 {
  margin-top: 2%;
}
.voice_attribute_config_detail {
  border: 1px solid rgba(150, 150, 150, 0.4);
  border-radius: 0.5%;
  padding: 2%;
  padding-top: 1%;
}
</style>
