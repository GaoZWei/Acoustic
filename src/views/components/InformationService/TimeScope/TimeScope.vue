<template>
  <div>
    <TimeScopeSearch/>
    <TimeScopeWave/>
    <TimeScopeAnalysis/>
  </div>
</template>
<script>
import TimeScopeSearch from "./TimeScopeSearch";
import TimeScopeWave from "./TimeScopeWave";
import TimeScopeAnalysis from "./TimeScopeAnalysis";

export default {
  components: {
    TimeScopeSearch,
    TimeScopeWave,
    TimeScopeAnalysis
  }
};
</script>
