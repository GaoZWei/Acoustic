<template>
  <div class="voice_detect_detail_wave">
    <h1>实时动态分析</h1>
    <div id="voice_detect_detail_wave_item" style="width: 90%; height: 20em;">
    </div>
  </div>
</template>
<script>
import { reactive, onBeforeUnmount } from "vue";
import { get } from "../../../../utils/request.js";
import * as echarts from "echarts";
export default {
  setup() {
    const datawave = reactive({
      list: []
    });
    var myChart;
    //获取波形图
    const getWaveItem = async () => {
      const result = await get(
        "https://result.eolinker.com/8WmLt3ib3418debd511d5eee42ae1e659a3307d6da1de4d?uri=/kafka/getmessage/rawdata/{deviceCategory}/{deviceSno}"
      );
      if (result.retCode == 200) {
        datawave.list = result.data.list;

        //将obj数据转化为array
        const dataWaveToArray = [];
        for (let i in datawave.list) {
          dataWaveToArray.push(datawave.list[i]);
        }

        const nowTime = () => {
          //获取当前时间
          var date = new Date();
          var hours = date.getHours();
          var minutes = date.getMinutes();
          var second = date.getSeconds();
          var time = hours + ":" + minutes + ":" + second;
          console.log(time);
          return time;
        };
        var timeArray = [];
        for (let j = 0; j < 300; j++) {
          timeArray.push(nowTime());
        }
        // setInterval(() => {
        //   timeArray.shift();
        //   timeArray.push(nowTime());
        // }, 1000);
        const echartInit = () => {
          var option = {
            xAxis: {
              type: "category",
              // boundaryGap: [1, "100%"],
              data: timeArray,
              splitLine: {
                show: false
              }
            },
            yAxis: {
              type: "value"
            },
            series: [
              {
                data: dataWaveToArray,
                type: "line",
                showSymbol: false,
                smooth: true
              }
            ]
          };
          if (myChart != null && myChart != "" && myChart != undefined) {
            myChart.dispose();
          }
          myChart = echarts.init(
            document.getElementById("voice_detect_detail_wave_item")
          );
          myChart.setOption(option);
        };
        echartInit();
      }
    };
    setTimeout(getWaveItem, 10);
    var timer = setInterval(getWaveItem, 3000); //每隔1s变化 暂时先变大,方便测试
    onBeforeUnmount(() => {
      // console.log("onBeforeUnmount");
      clearInterval(timer);
    });
  }
};
</script>
<style scoped>
.voice_detect_detail_wave {
  /* margin-top:2%; */
  padding: 2%;
  border: 1px solid rgb(210, 210, 210);
}
</style>