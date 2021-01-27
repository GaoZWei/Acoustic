<template>
  <div class="vibration_detect_detail_wave">
    <h1>实时动态分析</h1>
    <div id="vibration_detect_detail_wave_item" style="width: 80%; height: 20em;">
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";
import { onMounted } from "vue";
export default {
  setup() {
    //methods
    const echartInit = () => {
      var myChart = echarts.init(
        document.getElementById("vibration_detect_detail_wave_item")
      );
      // 指定图表的配置项和数据
      var base = new Date(1968, 9, 3);
      // var base = +new Date(1968, 9, 3);
      var oneDay = 24 * 3600 * 1000;
      var date = [];

      // var data = [Math.random() * 300];
      var data = [Math.random() * 10];

      for (var i = 1; i < 20000; i++) {
        var now = new Date((base += oneDay));
        date.push(
          [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/")
        );
        data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
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
          boundaryGap: false,
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
              // color: "rgb(255, 70, 131)"
              color: "rgba(139, 188, 236, 1)"
              // color: "rgb(255, 255, 255)"
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  // color: "rgb(255, 158, 68)"
                  color: "rgb(255, 255, 255)"
                },
                {
                  offset: 1,
                  // color: "rgb(255, 70, 131)"
                  color: "rgb(255, 255, 255)"
                }
              ])
            },
            data: data
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    };
    //onMounted
    onMounted(() => {
      echartInit();
    });
  }
};
</script>
<style scoped>
.vibration_detect_detail_wave {
  /* margin-top:2%; */
  padding: 2%;
  border: 1px solid rgb(210, 210, 210);
}
</style>