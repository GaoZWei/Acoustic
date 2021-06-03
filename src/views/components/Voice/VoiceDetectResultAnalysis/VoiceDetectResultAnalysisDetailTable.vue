<template>
  <a-table :columns="columns" :data-source="list" @change="onChange" class="voice_attribute_config_table">
    <template #action="{record}">
      <span :rowKey="record.id">
        <router-link to="/voice_detect_result_analysis_detail">查看详情</router-link>
      </span>
    </template>
  </a-table>
</template>
<script>
const columns = [
  {
    title: "ID",
    dataIndex: "id"
  },
  {
    title: "部件号",
    dataIndex: "deviceSno"
  },
  {
    title: "轴承类型",
    dataIndex: "deviceCategory"
  },
  {
    title: "具体故障",
    dataIndex: "specificFault"
  },
  {
    title: "故障原因",
    dataIndex: "faultCause"
  },
  {
    title: "检测方式",
    dataIndex: "deviceWay"
  },
  {
    title: "测试时间",
    dataIndex: "deviceTestTime",
    defaultSortOrder: "descend",
    sorter: (a, b) => {
      // a.create_time - b.create_time
      if (a.create_time && b) {
        return 12;
      }
    }
  },
  {
    title: "状态",
    dataIndex: "deviceStatus",
    filters: [
      {
        text: "运行中",
        value: "运行中"
      },
      {
        text: "关闭",
        value: "关闭"
      },
      {
        text: "故障",
        value: "故障",
        children: [
          {
            text: "外圈故障",
            value: "外圈故障"
          },
          {
            text: "内圈故障",
            value: "内圈故障"
          }
        ]
      }
    ],
    // specify the condition of filtering result
    // here is that finding the status started with `value`
    filterMultiple: false, //能否多选
    onFilter: (value, record) => record.status.indexOf(value) === 0
    // sorter: (a, b) => a.status.length - b.status.length,
    // sortDirections: ["descend"]
  }
  // {
  //   title: "操作",
  //   dataIndex: "action",
  //   slots: { customRender: "action" }
  // }
];

import { reactive, toRefs, watchEffect } from "vue";
import { get } from "../../../../utils/request.js";
import { dateFormatFn } from "../../../../utils/time.js";
import { useRoute } from "vue-router";
const onChange = (pagination, filters, sorter) => {
  console.log("params", pagination, filters, sorter);
};
//声信号检测结果分析
const useVoiceConfigTableEffect = () => {
  const route = useRoute();
  const data = reactive({
    list: [],
    deviceSno: "",
    deviceCategory: ""
  });
  data.deviceCategory = route.params.deviceCategory;
  data.deviceSno = route.params.deviceSno;
  const getItemData = async () => {
    const result = await get(
      `https://result.eolinker.com/8WmLt3ib3418debd511d5eee42ae1e659a3307d6da1de4d?uri=/database/results/multiple/detection-methods/${data.deviceCategory}/${data.deviceSno}`
    );
    if (result.retCode == 200) {
      const list = result.data;
      for (let i in list) {
        list[i].key = i;
        if (list[i].deviceStatus == 1) {
          list[i].deviceStatus = "故障";
        } else if (list[i].deviceStatus == 0) {
          list[i].deviceStatus = "正常";
        }
        if (list[i].deviceWay == 1) {
          list[i].deviceWay = "MVPDD";
        } else if (list[i].deviceWay == 0) {
          list[i].deviceWay = "时域检测方法";
        }
        var timeStamp = list[i].deviceTestTime;
        // var time = new Date(timeStamp * 1000);
        var date = new Date(timeStamp);
        var timelast = dateFormatFn(date);
        list[i].deviceTestTime = timelast.toString();
      }
      data.list = list;
    }
  };
  watchEffect(() => {
    //自动感知代码变化
    getItemData();
  });
  const { list } = toRefs(data);
  return { list };
};

export default {
  name: "VoiceDetectResultAnalysisDetailTable",
  setup() {
    const { list } = useVoiceConfigTableEffect();
    return { list, columns, onChange };
  }
};
</script>
<style scoped>
.voice_attribute_config_table {
  margin-top: 2%;
}
</style>

