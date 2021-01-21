<template>
  <h1>准确率</h1>
  <div class="line"></div>
  <a-row>
    <a-col :span="8">
      <div id="query_method_accuracy_one" style="width: 100%; height: 25em;">
      </div>
    </a-col>
    <a-col :span="2"></a-col>
    <a-col :span="7">
      <div>
        <h2>准确率排名</h2>
        <div class="query_method_list">
          <a-row>
            <a-col :span="2">
              <div class="circle_list">1.</div>
            </a-col>
            <a-col :span="12">传统检测方式</a-col>
            <a-col :span="10">99%</a-col>
          </a-row>
          <a-row style="margin-top:3%">
            <a-col :span="2">
              <div class="circle_list">2.</div>
            </a-col>
            <a-col :span="12">LSTM检测方式</a-col>
            <a-col :span="10">97%</a-col>
          </a-row>
          <a-row style="margin-top:3%">
            <a-col :span="2">
              <div class="circle_list">3.</div>
            </a-col>
            <a-col :span="12">DBN检测方式</a-col>
            <a-col :span="10">90%</a-col>
          </a-row>
          <a-row style="margin-top:3%">
            <a-col :span="2">
              <div class="circle_list">4.</div>
            </a-col>
            <a-col :span="12">CNN检测方式</a-col>
            <a-col :span="10">80%</a-col>
          </a-row>
        </div>
      </div>
    </a-col>
    <a-col :span="7">
      <div id="query_method_accuracy_two" style="width: 100%; height: 25em;">
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
      var myChart_Accuracy_one = echarts.init(
        document.getElementById("query_method_accuracy_one")
      );
      var myChart_Accuracy_two = echarts.init(
        document.getElementById("query_method_accuracy_two")
      );
      // 指定图表的配置项和数据
      var option_accuracy_one = {
        color: "rgba(60, 144, 247, 1)",
        title: {
          text: "准确率（百分制）",
          textStyle: {
            fontSize: "11",
            color: "rgba(125, 128, 135, 0.85)"
          },
          top: "3%"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        // legend: {
        //     data: ['2011年']
        // },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: "10%",
          containLabel: true
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
          splitLine: {
            //对齐线隐藏
            show: false
          }
        },
        yAxis: {
          type: "category",
          data: ["CNN检测方式", "LSTM检测方式", "DBN检测方式", "传统检测方式"]
        },
        series: [
          {
            name: "2011年",
            type: "bar",
            barWidth: "45%",
            data: [88, 80, 90, 75]
          }
        ]
      };

      var option_accuracy_two = {
        title: {
          text: "占用时间比例",
          // left: "left",
          textStyle: {
            fontSize: "11",
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
      myChart_Accuracy_one.setOption(option_accuracy_one);
      myChart_Accuracy_two.setOption(option_accuracy_two);
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
h1 {
  margin-top: 2%;
}
h2 {
  margin-top: 3%;
  font-size: 1px;
  color: rgba(125, 128, 135, 0.85);
}
.line {
  background-color: rgba(24, 144, 255, 1);
  height: 2px;
  width: 5%;
  margin-top: -0.5%;
  margin-bottom: 2%;
}
.query_method_list {
  margin-top: 5%;
  margin-left: -5%;
}

</style>