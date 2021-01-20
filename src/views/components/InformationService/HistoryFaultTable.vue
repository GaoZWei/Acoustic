<template>
  <div id="history_fault">
    <a-table :columns="columns" :data-source="data">
      <template #name="{text}">
        <a>{{ text }}</a>
      </template>
    </a-table>
  </div>
</template>
<script>
const columns = [
  {
    title: "故障时间",
    dataIndex: "fault_time",
    key: "name",
    slots: { customRender: "name" }
  },
  {
    title: "信号类型",
    dataIndex: "signal_type",
    key: "age",
    width: 80
  },
  {
    title: "检测方式",
    dataIndex: "detect_way",
    key: "address 1",
    ellipsis: true
  },
  {
    title: "使用时长",
    dataIndex: "use_time",
    key: "use_time",
    ellipsis: true
  },
  {
    title: "操作",
    dataIndex: "operate",
    key: "address 2",
    ellipsis: true
  }
];

const data = [
  {
    key: "1",
    fault_time: "2017-10-01  14:10",
    signal_type: "声信号",
    detect_way: "DBN神经网络检测方式",
    use_time: "5mins",
    tags: ["nice", "developer"]
  },
  {
    key: "2",
    fault_time: "2017-10-01  14:10",
    signal_type: "声信号",
    detect_way: "LSTM神经网络检测方式",
    use_time: "5mins",
    tags: ["loser"]
  },
  {
    key: "3",
    fault_time: "2017-10-01  14:10",
    signal_type: "声信号",
    detect_way: "DBN神经网络检测方式",
    use_time: "5mins",
    tags: ["cool", "teacher"]
  },
  {
    key: "4",
    fault_time: "2017-10-01  14:10",
    signal_type: "声信号",
    detect_way: "LSTM神经网络检测方式",
    use_time: "5mins",
    tags: ["cool", "teacher"]
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
