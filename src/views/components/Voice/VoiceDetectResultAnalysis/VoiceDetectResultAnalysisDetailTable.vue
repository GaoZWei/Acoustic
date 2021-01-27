<template>
  <a-table :columns="columns" :data-source="data" :pagination=false>
  </a-table>
</template>
<script>
const columns = [
  {
    title: "检测方式",
    dataIndex: "detect_way",
    key: "detect_way"
  },
  {
    title: "数据源",
    dataIndex: "data_origin",
    key: "data_origin"
  },
  {
    title: "检测结果",
    dataIndex: "detect_result",
    key: "detect_result"
  },
  {
    title: "检测时间",
    key: "detect_time",
    dataIndex: "detect_time"
  }
];

const data = [
  {
    key: "1",
    detect_way: "传统检测方式",
    data_origin: "振动信号",
    detect_result: "内圈故障",
    detect_time: "2020-10-31 11:40"
  },
  {
    key: "2",
    detect_way: "DBN神经网络检测方式",
    data_origin: "声信号",
    detect_result: "故障",
    detect_time: "2020-10-31 11:40"
  },
  {
    key: "3",
    detect_way: "LSTM神经网络检测方式",
    data_origin: "声信号",
    detect_result: "故障",
    detect_time: "2020-10-31 11:40"
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
