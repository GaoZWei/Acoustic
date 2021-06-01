<template>
  <div class="voice_detect_detail_wave">
    <h1>实时动态分析</h1>
    <div id="voice_detect_detail_wave_item" style="width: 80%; height: 20em;">
    </div>
  </div>
</template>
<script>
import { reactive } from "vue";
import { get } from "../../../../utils/request.js";
import * as echarts from "echarts";
export default {
  setup() {
    const datawave = reactive({
      list: []
    });
    const getWaveItem = async () => {
      const result = await get(
        "https://result.eolinker.com/8WmLt3ib3418debd511d5eee42ae1e659a3307d6da1de4d?uri=/kafka/getmessage/rawdata/{deviceCategory}/{deviceSno}"
      );
      if (result.retCode == 200) {
        datawave.list = result.data.list;
        const dataWaveToArray = [];
        for (let i in datawave.list) {
          dataWaveToArray.push(datawave.list[i]); //将obj数据转化为array
        }
        
        const echartInit = () => {
          var myChart = echarts.init(
            document.getElementById("voice_detect_detail_wave_item")
          );
          // console.log(datawave.list.length);

          function randomData() {
            now = new Date(+now + oneDay);
            // now = new Date();
            value = value + Math.random() * 21 - 10;
            return {
              name: now.toString(),
              value: [
                [now.getFullYear(), now.getMonth() + 1, now.getDate()].join(
                  "/"
                ),
                Math.round(value)
                // dataWaveToArray
                // 122
              ]
            };
          }

          var data = [];
          var now = +new Date(1997, 9, 3);
          // var now = +new Date();
          var oneDay = 24 * 3600 * 1000;
          // var oneDay = 2000;

          var value = Math.random() * 1000;
          for (var i = 0; i < 2048; i++) {
            //推入2048个时间和数据
            data.push(randomData());
          }

          var option = {
            // title: {
            //   text: "动态数据 + 时间坐标轴"
            // },
            tooltip: {
              trigger: "axis",
              formatter: function(params) {
                params = params[0];
                var date = new Date(params.name);
                return (
                  date.getDate() +
                  "/" +
                  (date.getMonth() + 1) +
                  "/" +
                  date.getFullYear() +
                  " : " +
                  params.value[1]
                );
              },
              axisPointer: {
                animation: false
              }
            },
            xAxis: {
              type: "time",
              splitLine: {
                show: false
              }
            },
            yAxis: {
              type: "value",
              boundaryGap: [0, "100%"],
              splitLine: {
                show: false
              }
            },
            series: [
              {
                name: "模拟数据",
                type: "line",
                showSymbol: false,
                hoverAnimation: false,
                data: data
              }
            ]
          };

          setInterval(function() {
            for (var i = 0; i < 5; i++) {
              data.shift();
              data.push(randomData());
            }

            myChart.setOption({
              series: [
                {
                  data: data
                }
              ]
            });
          }, 1000);
          myChart.setOption(option);
        };
        echartInit();
      }
    };
    // setInterval(getWaveItem, 2000);
    getWaveItem();
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