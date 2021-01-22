<template>
  <div id="history_fault">
    <a-table :columns="columns" :data-source="data">
      <template #name="{text}">
        <a>{{ text }}</a>
      </template>
      <template #action="{record}">
        <span>
          {{record.detect_way}}
          <a>打印故障单</a>
        </span>
      </template>
    </a-table>
  </div>
</template>
<script>
const columns = [
  {
    title: "故障时间",
    dataIndex: "fault_time",
    key: "fault_time",
    slots: { customRender: "fault_time" }
  },
  {
    title: "信号类型",
    dataIndex: "signal_type",
    key: "signal_type"
  },
  {
    title: "检测方式",
    dataIndex: "detect_way",
    key: "detect_way"
  },
  {
    title: "使用时长",
    dataIndex: "use_time",
    key: "use_time"
  },
  {
    title: "操作",
    key: "action",
    slots: { customRender: "action" }
  }
];

const data = [
  {
    key: "1",
    fault_time: "2020-10-01  14:10",
    signal_type: "声信号",
    detect_way: "DBN神经网络检测方式",
    use_time: "5mins"
  },
  {
    key: "2",
    fault_time: "2018-10-01  14:10",
    signal_type: "声信号",
    detect_way: "LSTM神经网络检测方式",
    use_time: "5mins"
  },
  {
    key: "3",
    fault_time: "2017-10-01  14:10",
    signal_type: "声信号",
    detect_way: "DBN神经网络检测方式",
    use_time: "5mins"
  },
  {
    key: "4",
    fault_time: "2017-10-01  14:10",
    signal_type: "声信号",
    detect_way: "LSTM神经网络检测方式",
    use_time: "5mins"
  }
];

export default {
  data() {
    return {
      data,
      columns
    };
  }
};
</script>

<style>
#history_fault {
  margin-top: 2%;
  margin-bottom: 5%;
}
</style>
