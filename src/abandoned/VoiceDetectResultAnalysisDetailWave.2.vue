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
// import { onMounted } from "vue";
export default {
  setup() {
    const data = reactive({
      list: []
    });
    const getWaveItem = async () => {
      const result = await get(
        "https://result.eolinker.com/8WmLt3ib3418debd511d5eee42ae1e659a3307d6da1de4d?uri=/kafka/getmessage/rawdata/{deviceCategory}/{deviceSno}"
      );
      if (result.retCode == 200) {
        data.list = result.data.list;
        const echartInit = () => {
          var myChart = echarts.init(
            document.getElementById("voice_detect_detail_wave_item")
          );
          // 指定图表的配置项和数据
          // var base = new Date(2021, 5, 18);
          var base = new Date();
          var oneSecond = 1;
          var date = [];

          // var datawave = [Math.random() * 10];
          // var datawave = [];
          for (var i = 0; i < 20480; i++) {
            var now = new Date((base += oneSecond));
            // date.push(
            //   [now.getFullYear(), now.getMonth() + 1, now.getDate(),now.getMinutes(),now.getSeconds()].join("/")
            // );
            date.push(
              [ now.getHours(),now.getMinutes(), now.getSeconds()].join("/")
            );
            // datawave.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
            // datawave = data.list;
          }

          var option = {
            tooltip: {
              trigger: "axis",
              position: function(pt) {
                return [pt[0], "10%"];
              }
            },
            title: {
              left: "center",
              text: "原始数据实时动态统计分析"
            },
            toolbox: {
              feature: {
                dataZoom: {
                  yAxisIndex: "none"
                },
                restore: {},
                saveAsImage: {}
              }
            },
            xAxis: {
              type: "category",
              // boundaryGap: false,
              // boundaryGap: 100,
              data: date
            },
            yAxis: {
              type: "value",
              boundaryGap: [0, "100%"]
            },
            dataZoom: [
              {
                type: "inside",
                start: 0,
                end: 10
              },
              {
                start: 0,
                end: 10,
                handleIcon:
                  "path://M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
                handleSize: "80%",
                handleStyle: {
                  color: "#fff",
                  shadowBlur: 3,
                  shadowColor: "rgba(0, 0, 0, 0.6)",
                  shadowOffsetX: 2,
                  shadowOffsetY: 2
                }
              }
            ],
            series: [
              {
                name: "1号车轴",
                type: "line",
                smooth: true,
                symbol: "none",
                sampling: "average",
                itemStyle: {
                  color: "rgba(139, 188, 236, 1)"
                },
                areaStyle: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: "rgb(255, 255, 255)"
                    },
                    {
                      offset: 1,
                      color: "rgb(255, 255, 255)"
                    }
                  ])
                },
                // data: datawave
                data: data.list
              }
            ]
          };

          // 使用刚指定的配置项和数据显示图表。
          myChart.setOption(option);
          // var now_one = new Date();
          // console.log(now_one);
        };
        // watchEffect(() => {
        echartInit();
        // });
      }
    };
    //onMounted
    // onMounted(() => {
    // });
    // getWaveItem();
    setInterval(getWaveItem, 2000);
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