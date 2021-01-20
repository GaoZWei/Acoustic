<template>
  <HistoryFaultSearch/>
  <h1>
    历史故障信息
  </h1>
  <HistoryFaultTable/>
</template>

<script>
import HistoryFaultSearch from "./HistoryFaultSearch";
import HistoryFaultTable from "./HistoryFaultTable";

export default {
  components: {
    HistoryFaultSearch,
    HistoryFaultTable
  }
};
</script>