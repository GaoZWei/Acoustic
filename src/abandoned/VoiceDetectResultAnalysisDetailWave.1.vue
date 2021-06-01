<template>
  <div class="voice_detect_detail_wave">
    <h1>实时动态分析</h1>
    <div id="voice_detect_detail_wave_item" style="width: 80%; height: 20em;">
    </div>
  </div>
</template>
<script>
// import { reactive } from "vue";
// import { get } from "../../../../utils/request.js";
import * as echarts from "echarts";
// import { onMounted } from "vue";

//波形图相关逻辑
const voiceDetectWaveEffect = () => {
  // const data = reactive({
  //   list: []
  // });
  //获取波形图数据
  // const getWaveItem = async () => {
  //   const result = await get(
  //     "https://result.eolinker.com/8WmLt3ib3418debd511d5eee42ae1e659a3307d6da1de4d?uri=/kafka/getmessage/rawdata/{deviceCategory}/{deviceSno}"
  //   );
  //   data.list = result.data.list;
  // };
  // getWaveItem();
  // const echartInit = () => {
  var myChart = echarts.init(
    document.getElementById("voice_detect_detail_wave_item")
  );
  // var datawave = data.list;

  const randomData = () => {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    return {
      name: now.toString(),
      value: [
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"),
        Math.round(value)
      ]
    };
  };

  var data = [];
  var now = +new Date(1997, 9, 3);
  var oneDay = 24 * 3600 * 1000;
  var value = Math.random() * 1000;
  for (var i = 0; i < 1000; i++) {
    data.push(randomData());
  }

  var option = {
    title: {
      text: "动态数据 + 时间坐标轴"
    },
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

  // var option = {
  //   tooltip: {
  //     trigger: "axis",
  //     position: function(pt) {
  //       return [pt[0], "10%"];
  //     }
  //   },
  //   title: {
  //     left: "center",
  //     text: "原始数据实时动态统计分析"
  //   },
  //   toolbox: {
  //     feature: {
  //       dataZoom: {
  //         yAxisIndex: "none"
  //       },
  //       restore: {},
  //       saveAsImage: {}
  //     }
  //   },
  //   xAxis: {
  //     type: "category",
  //     boundaryGap: false,
  //     // data: date
  //     data: 1
  //   },
  //   yAxis: {
  //     type: "value",
  //     boundaryGap: [0, "100%"]
  //   },
  //   dataZoom: [
  //     {
  //       type: "inside",
  //       start: 0,
  //       end: 10
  //     },
  //     {
  //       start: 0,
  //       end: 10,
  //       handleIcon:
  //         "path://M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
  //       handleSize: "80%",
  //       handleStyle: {
  //         color: "#fff",
  //         shadowBlur: 3,
  //         shadowColor: "rgba(0, 0, 0, 0.6)",
  //         shadowOffsetX: 2,
  //         shadowOffsetY: 2
  //       }
  //     }
  //   ],
  //   series: [
  //     {
  //       name: "1号车轴",
  //       type: "line",
  //       smooth: true,
  //       symbol: "none",
  //       sampling: "average",
  //       itemStyle: {
  //         // color: "rgb(255, 70, 131)"
  //         color: "rgba(139, 188, 236, 1)"
  //         // color: "rgb(255, 255, 255)"
  //       },
  //       areaStyle: {
  //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
  //           {
  //             offset: 0,
  //             // color: "rgb(255, 158, 68)"
  //             color: "rgb(255, 255, 255)"
  //           },
  //           {
  //             offset: 1,
  //             // color: "rgb(255, 70, 131)"
  //             color: "rgb(255, 255, 255)"
  //           }
  //         ])
  //       },
  //       data: datawave
  //     }
  //   ]
  // };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  // };
};
export default {
  setup() {
    //methods
    voiceDetectWaveEffect();
    // echartInit();
    // return { echartInit };
    //onMounted
    // onMounted(() => {});
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