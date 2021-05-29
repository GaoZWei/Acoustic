<template>
    <div class="voice_component_add_form">
        <!-- <a-form :model="form" :label-col="labelCol" :wrapper-col="wrapperCol"> -->
        <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-form-item label="编号">
                <!-- <a-input v-model:value="form.id" placeholder="给部件起个编号" /> -->
                <a-input v-model:value="deviceSno" placeholder="给部件起个编号" />
            </a-form-item>
            <a-form-item label="型号">
                <!-- <a-input v-model:value="form.model" placeholder="给部件起个型号" /> -->
                <a-input v-model:value="deviceCategory" placeholder="给部件起个型号" />
            </a-form-item>
            <!-- <a-form-item label="部件类型">
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
            <a-form-item label="部件类型(选填)">
                <a-input v-model:value="form.type_option" placeholder="请描述部件类型" />
            </a-form-item> -->
            <a-form-item label="生产时间">
                <a-date-picker v-model:value="deviceProductionTime" show-time type="date" placeholder="请选择时间" style="width: 100%;" />
            </a-form-item>
            <a-form-item label="部件描述">
                <a-textarea v-model:value="deviceDescrition" placeholder="请输入对部件的描述" :rows="4" />
            </a-form-item>
            <a-form-item label="状态">
                <!-- <a-input v-model:value="form.model" placeholder="给部件起个型号" /> -->
                <a-input v-model:value="deviceStatus" placeholder="给部件设置状态" />
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
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { post } from "../../../../utils/request.js";

const componentAddEffect = () => {
  const router = useRouter();
  const data = reactive({
    deviceCategory: "",
    deviceSno: "",
    deviceProductionTime: "",
    deviceDescrition: "",
    deviceStatus: "",
    labelCol: { span: 4 },
    wrapperCol: { span: 14 }
  });
  const onSubmit = async () => {
    try {
      const {
        deviceCategory,
        deviceSno,
        deviceProductionTime,
        deviceDescrition,
        deviceStatus
      } = data;
      if (
        deviceCategory === "" ||
        deviceSno === "" ||
        deviceProductionTime === "" ||
        deviceDescrition === "" ||
        deviceStatus === ""
      ) {
        alert("请输入完整");
      } else {
        //处理时间戳
        const deviceProductionTimeFormat = data.deviceProductionTime.format(
          "yyyy-MM-DD HH:mm:ss"
        );
        var deviceProductionTimeOne = new Date(deviceProductionTimeFormat);
        var deviceProductionTimeTwo = deviceProductionTimeOne.getTime();
        var deviceProductionTimeItem = deviceProductionTimeTwo / 1000;
        const result = await post(
          "https://result.eolinker.com/8WmLt3ib3418debd511d5eee42ae1e659a3307d6da1de4d?uri=/database/insert/devices/information",
          {
            deviceCategory: data.deviceCategory,
            deviceSno: data.deviceSno,
            deviceProductionTime: deviceProductionTimeItem,
            deviceDescrition: data.deviceDescrition,
            deviceStatus: data.deviceStatus
          }
        );
        if (result.retCode == 200) {
          router.push({ name: "voice_attribute_config" });
        } else if (result.retCode == 506) {
          alert("部件已存在");
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  const {
    deviceCategory,
    deviceSno,
    deviceProductionTime,
    deviceDescrition,
    deviceStatus,
    labelCol,
    wrapperCol
  } = toRefs(data);
  return {
    deviceCategory,
    deviceSno,
    deviceProductionTime,
    deviceDescrition,
    deviceStatus,
    labelCol,
    wrapperCol,
    onSubmit
  };
};
export default {
  name: "VoiceComponentAddForm",
  setup() {
    const {
      deviceCategory,
      deviceSno,
      deviceProductionTime,
      deviceDescrition,
      deviceStatus,
      labelCol,
      wrapperCol,
      onSubmit
    } = componentAddEffect();
    // 时间戳转时间
    // var timeStamp = 1619433445;
    // var time = new Date(timeStamp * 1000);
    // console.log(time);
    return {
      deviceCategory,
      deviceSno,
      deviceProductionTime,
      deviceDescrition,
      deviceStatus,
      labelCol,
      wrapperCol,
      onSubmit
    };
  }
  //   data() {
  //     return {
  //       labelCol: { span: 4 },
  //       wrapperCol: { span: 14 },
  //       form: {
  //         id: "",
  //         model: "",
  //         type: "bearing",
  //         traditional: true,
  //         intelligent: ["dbn", "lstm"],
  //         desc: "",
  //         date: undefined,
  //         type_option: ""
  //       }
  //     };
  //   },
  //   methods: {
  //     onSubmit() {
  //       //   console.log("submit!", this.form);
  //       console.log(this.form.id); //post
  //     }
  //   }
};
</script>
<style scoped>
.voice_component_add_form {
  margin-top: 3%;
  margin-left: 20%;
  margin-top: 3%;
  margin-bottom: 5%;
}
</style>

