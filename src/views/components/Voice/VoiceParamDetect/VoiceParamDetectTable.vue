<template>
  <a-table :columns="columns" :data-source="data" class="voice_param_detect_table">
    <!-- <template #id="{text}">
      <a>{{ text }}</a>
    </template> -->
  </a-table>
</template>
<script>
const columns = [
  {
    title: "序号",
    dataIndex: "id",
    key: "id",
    slots: { customRender: "id" }
  },
  {
    title: "到达时间",
    dataIndex: "arrive_time",
    key: "arrive_time"
  },
  {
    title: "上升时间",
    dataIndex: "rise_time",
    key: "rise_time"
  },
  {
    title: "上升计数",
    dataIndex: "rise_count",
    key: "rise_count"
  },
  {
    title: "能量",
    dataIndex: "energy",
    key: "energy"
  },
  {
    title: "持续时间",
    dataIndex: "duration",
    key: "duration"
  },
  {
    title: "幅度",
    dataIndex: "amplitude",
    key: "amplitude"
  }
];

const data = [
  {
    key: "1",
    id: "1",
    arrive_time: "2017-10-31  23:12:00",
    rise_time: 145.23,
    rise_count: 152.33,
    energy: 540.31,
    duration: 152.33,
    amplitude: 59
  },
  {
    key: "2",
    id: "2",
    arrive_time: "2017-10-31  23:12:00",
    rise_time: 145.23,
    rise_count: 152.33,
    energy: 540.31,
    duration: 152.33,
    amplitude: 59
  },
  {
    key: "3",
    id: "3",
    arrive_time: "2017-10-31  23:12:00",
    rise_time: 145.23,
    rise_count: 152.33,
    energy: 540.31,
    duration: 152.33,
    amplitude: 59
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
<style scoped>
.voice_param_detect_table {
  margin-top: 2%;
}
</style>
