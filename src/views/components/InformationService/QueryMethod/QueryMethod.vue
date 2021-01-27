<template>
  <QueryMethodTime/>
  <QueryMethodAccuracy/>
  <QueryMethodFaultSort/>
</template>
<script>
import QueryMethodTime from "./QueryMethodTime";
import QueryMethodAccuracy from "./QueryMethodAccuracy";
import QueryMethodFaultSort from "./QueryMethodFaultSort";
export default {
  components: {
    QueryMethodAccuracy,
    QueryMethodTime,
    QueryMethodFaultSort
  }
};
</script>
