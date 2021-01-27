
<template>
    <div class="vibration_result_analysis_chart">
        <div>
            <a-row>
                <a-col :span="11">
                    <div id="vibration_result_analysis_one" style="width: 95%; height: 20em;"></div>
                    <a-row>
                        <a-col :span="4"></a-col>
                        <a-col :span="4">
                            <span class="icon_one">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            1号轴承
                        </a-col>
                        <a-col :span="2"></a-col>
                        <a-col :span="4">
                            <span class="icon_two">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            运行中
                        </a-col>
                        <a-col :span="2"></a-col>
                        <a-col :span="4">
                            <span class="icon_three">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <router-link to="/vibration_detect_result_analysis_detail">&nbsp;详情</router-link>
                        </a-col>
                        <a-col :span="4"></a-col>
                    </a-row>
                </a-col>
                <a-col :span="2"></a-col>
                <a-col :span="11">
                    <div id="vibration_result_analysis_two" style="width: 95%; height: 20em;"></div>
                    <a-row>
                        <a-col :span="4"></a-col>
                        <a-col :span="4">
                            <span class="icon_one">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            2号轴承
                        </a-col>
                        <a-col :span="2"></a-col>
                        <a-col :span="4">
                            <span class="icon_two">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            故障中
                        </a-col>
                        <a-col :span="2"></a-col>
                        <a-col :span="4">
                            <span class="icon_three">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <router-link to="/vibration_detect_result_analysis_detail">&nbsp;详情</router-link>
                        </a-col>
                        <a-col :span="4"></a-col>
                    </a-row>
                </a-col>
            </a-row>
        </div>
        <div>
            <a-row>
                <a-col :span="11">
                    <div id="vibration_result_analysis_three" style="width: 95%; height: 20em;"></div>
                    <a-row>
                        <a-col :span="4"></a-col>
                        <a-col :span="4">
                            <span class="icon_one">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            3号轴承
                        </a-col>
                        <a-col :span="2"></a-col>
                        <a-col :span="4">
                            <span class="icon_two">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            运行中
                        </a-col>
                        <a-col :span="2"></a-col>
                        <a-col :span="4">
                            <span class="icon_three">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <router-link to="/vibration_detect_result_analysis_detail">&nbsp;详情</router-link>
                        </a-col>
                        <a-col :span="4"></a-col>
                    </a-row>
                </a-col>
                <a-col :span="2"></a-col>
                <a-col :span="11">
                    <div id="vibration_result_analysis_four" style="width: 95%; height: 20em;"></div>
                    <a-row>
                        <a-col :span="4"></a-col>
                        <a-col :span="4">
                            <span class="icon_one">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            4号轴承
                        </a-col>
                        <a-col :span="2"></a-col>
                        <a-col :span="4">
                            <span class="icon_two">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            运行中
                        </a-col>
                        <a-col :span="2"></a-col>
                        <a-col :span="4">
                            <span class="icon_three">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <router-link to="/vibration_detect_result_analysis_detail">&nbsp;详情</router-link>
                        </a-col>
                        <a-col :span="4"></a-col>
                    </a-row>

                </a-col>
            </a-row>
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
      var myChart_one = echarts.init(
        document.getElementById("vibration_result_analysis_one")
      );
      var myChart_two = echarts.init(
        document.getElementById("vibration_result_analysis_two")
      );
      var myChart_three = echarts.init(
        document.getElementById("vibration_result_analysis_three")
      );
      var myChart_four = echarts.init(
        document.getElementById("vibration_result_analysis_four")
      );
      var option_one = {
        xAxis: {
          type: "category",
          data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [
              1000,
              500,
              600,
              450,
              235,
              247,
              260,
              600,
              220,
              378,
              234,
              1145
            ],
            type: "line"
          }
        ]
      };
      var option_two = {
        xAxis: {
          type: "category",
          data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [
              1000,
              500,
              600,
              450,
              235,
              247,
              260,
              600,
              220,
              378,
              234,
              1145
            ],
            type: "line"
          }
        ]
      };
      var option_three = {
        xAxis: {
          type: "category",
          data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [
              1000,
              500,
              600,
              450,
              235,
              247,
              260,
              600,
              220,
              378,
              234,
              1145
            ],
            type: "line"
          }
        ]
      };
      var option_four = {
        xAxis: {
          type: "category",
          data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [
              1000,
              500,
              600,
              450,
              235,
              247,
              260,
              600,
              220,
              378,
              234,
              1145
            ],
            type: "line"
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart_one.setOption(option_one);
      myChart_two.setOption(option_two);
      myChart_three.setOption(option_three);
      myChart_four.setOption(option_four);
    };
    //onMounted
    onMounted(() => {
      echartInit();
    });
  }
};
</script>
<style scoped>
.vibration_result_analysis_chart {
  padding: 2%;
}
.icon_one {
  width: 15px;
  height: 15px;
  left: 399px;
  top: 552px;
  font-size: 15px;
  background-color: rgba(255, 235, 59, 1);
}
.icon_two {
  width: 15px;
  height: 15px;
  /* left: 534px;
  top: 553px;
  color: rgba(80, 80, 80, 1); */
  background-color: rgba(24, 144, 255, 1);
  border-radius: 45%;
  font-size: 14px;
  line-height: 150%;
  text-align: center;
}
.icon_three {
  width: 15px;
  height: 15px;
  /* left: 650px;
  top: 528px; 
  font-size: 15px;*/
  background-color: rgba(67, 207, 124, 1);
  border-radius: 30%;
}
</style>

