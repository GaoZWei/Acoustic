<template>
  <h1>检测时间</h1>
  <div class="line"></div>
  <a-row>
    <a-col :span="11">
      <div id="query_method_time_one" style="width: 100%; height: 25em;">
      </div>
    </a-col>
    <a-col :span="2"></a-col>
    <a-col :span="11">
      <div id="query_method_time_two" style="width: 100%; height: 25em;">
      </div>
    </a-col>
  </a-row>
</template>
<script>
import * as echarts from "echarts";
import { onMounted } from "vue";
export default {
  setup() {
    //methods
    const echartInit = () => {
      var myChart_One = echarts.init(
        document.getElementById("query_method_time_one")
      );
      var myChart_Two = echarts.init(
        document.getElementById("query_method_time_two")
      );
      // 指定图表的配置项和数据
      var option_one = {
        color: "rgba(60, 144, 247, 1)",
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "6%",
          right: "4%",
          bottom: "3%",
          top: "10%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: [
              "传统检测方式",
              "DBN检测方式",
              "LSTM检测方式",
              "CNN检测方式"
            ],
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: {
              show: true,
              // textStyle: {
              // color: "#c3dbff", //更改坐标轴文字颜色
              fontSize: 10 //更改坐标轴文字大小
              // }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "检测时间（秒）",
            minInterval: 10,
            interval: 10
          }
        ],
        series: [
          {
            name: "数据",
            type: "bar",
            barWidth: "30%",
            data: [32, 22, 20, 34]
          }
        ]
      };

      var option_two = {
        title: {
          text: "占用时间比例",
          // left: "left",
          textStyle: {
            fontSize: 11,
            color: "rgba(125, 128, 135, 0.85)"
          },
          top: "3%"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          right: 80,
          top: 150,
          data: ["传统检测方式", "DBN检测方式", "LSTM检测方式", "CNN检测方式"]
        },
        color: [
          "rgba(60, 144, 247, 1)",
          "rgba(85, 191, 192, 1)",
          "rgba(94, 190, 103, 1)",
          "rgba(244, 205, 73, 1)"
        ],
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["45%", "55%"],
            avoidLabelOverlap: false,
            right: 200,
            label: {
              show: false,
              position: "center"
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "18"
                // fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 35, name: "传统检测方式" },
              { value: 10, name: "DBN检测方式" },
              { value: 34, name: "LSTM检测方式" },
              { value: 35, name: "CNN检测方式" }
            ]
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart_One.setOption(option_one);
      myChart_Two.setOption(option_two);
    };
    //onMounted
    onMounted(() => {
      echartInit();
    });
    //return
    return {
      echartInit
    };
  }
};
</script>
<style scoped>
.line {
  background-color: rgba(24, 144, 255, 1);
  height: 2px;
  width: 7%;
  margin-top: -0.5%;
  margin-bottom: 2%;
}
</style>