import { ReactEChartsProps } from "../components/ReactECharts";
import type { SeriesOption } from "echarts";
import * as echarts from "echarts/core";
import { validateData } from "../utils/validataData";
import {
  CallbackDataParams,
  TooltipFormatterCallback,
  TooltipOption,
  TopLevelFormatterParams,
} from "echarts/types/dist/shared";

export const getOptions = (
  dataC: string[],
  dataS: any[],
  dataS1: any[] | undefined = undefined,
  dataBar1: any[] | undefined = undefined,
  dataBar2: any[] | undefined = undefined
): ReactEChartsProps["option"] => {
  const dataLength = dataC.length;
  const xAxis = dataC.map((_, index): { xAxis: number } => {
    return { xAxis: index };
  });
  let legend = ["2021"];
  const seriesDemo: SeriesOption | SeriesOption[] = [
    {
      name: "2021",
      data: validateData(dataLength, dataS),
      type: "line",
      //Size dot
      //   symbolSize: 10,
      symbol: "none",
      //Color line
      itemStyle: {
        color: "#80AAA8",
        // opacity: 0.2,
      },
      //Size line
      lineStyle: {
        width: 4,
      },
      markLine: {
        symbol: ["none", "none"],
        symbolOffset: ["none", "none"],
        label: { show: false },
        data: xAxis,
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(1, 0, 1, 1, [
          {
            offset: 0,
            color: "#78ACA4",
          },
          {
            offset: 1,
            color: "#D2DBDA",
          },
        ]),
        // opacity: 0.3,
      },
    },
  ];
  if (dataS1) {
    const series1: SeriesOption = {
      name: "2022",
      data: validateData(dataLength, dataS1),
      type: "line",
      symbol: "none",

      lineStyle: {
        width: 4,
      },
      //   stack: "x",
      itemStyle: {
        color: "#4D8AE3",
        // opacity: 0.2,
      },
      markLine: {
        symbol: ["none", "none"],
        symbolOffset: ["none", "none"],
        label: { show: false },
        data: xAxis,
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(1, 0, 1, 1, [
          {
            offset: 0,
            color: "#4D8AE3",
          },
          {
            offset: 1,
            color: "#D2DBDA",
          },
        ]),
        // opacity: 0.2,
      },
    };
    seriesDemo.push(series1);
    legend.push("2022");
  }
  if (dataBar1) {
    seriesDemo.push({
      name: "Bar1",
      type: "bar",
      data: [
        [-0.1, 30],
        [0.9, 30],
        [1.9, 50],
        [2.9, 40],
        [3.9, 60],
        [4.9, 70],
        [5.9, 80],
      ],
      barWidth: "2",
      barMaxWidth: 1,
      itemStyle: {
        borderColor: dataBar2 ? "#4D8AE3" : "#78ACA4",
        borderWidth: 1,
        borderType: "dashed",
        borderDashOffset: 10,
        borderCap: "square",
      },
      markLine: {
        lineStyle: {
          type: "dashed",
        },
        // data: [[{ type: "min" }, { type: "max" }]],
      },
      zlevel: 10,
    });
    seriesDemo.push({
      name: "s2",
      type: "scatter",
      z: 10,
      data: [
        [-0.1, 30],
        [0.9, 30],
        [1.9, 50],
        [2.9, 40],
        [3.9, 60],
        [4.9, 70],
        [5.9, 80],
      ],
      itemStyle: {
        color: "white",
        borderColor: "green",
      },
    });
    legend.push("Bar1");
  }
  if (dataBar2) {
    console.log(validateData(dataLength, dataBar2, 2));
    seriesDemo.push({
      name: "Bar2",
      type: "bar",
      data: [
        [0.1, 30],
        [1.1, 30],
        [2.1, 50],
        [3.1, 40],
        [4.1, 60],
        [5.1, 70],
        [6.1, 80],
      ],
      barWidth: "2",
      barGap: "10",
      itemStyle: {
        borderColor: "#78ACA4",
        borderWidth: 1,
        borderType: "dashed",
        borderDashOffset: 10,
      },
      zlevel: 10,
      stack: "x",
    });
    legend.push("Bar2");
    seriesDemo.push({
      name: "s2",
      type: "scatter",
      data: [
        [0.1, 30],
        [1.1, 30],
        [2.1, 50],
        [3.1, 40],
        [4.1, 60],
        [5.1, 70],
        [6.1, 80],
      ],
      itemStyle: {
        color: "white",
        borderColor: "blue",
      },
    });
  }

  return {
    // grid: {
    //   left: "3%",
    //   right: "4%",
    //   bottom: "3%",
    //   containLabel: true,
    // },
    tooltip: {
      trigger: "item",
      axisPointer: { type: "shadow" },
      formatter: function (params: CallbackDataParams | CallbackDataParams[]) {
        console.log(typeof params, params);
        // if (!Array.isArray(params)) {
        //   console.log(params?.marker);
        //   return params?.marker;
        // }
        // params?.map((item) => {
        //   return (
        //     '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#4D8AE3;"></span>' +
        //     item
        //   );
        // });
        return "asdasdasd";
      },
    },
    title: {
      text: "ECharts Demo",
    },
    xAxis: {
      type: "value",
      name: "Exam",
      boundaryGap: true,
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      show: true,
      axisLabel: {
        formatter: "Exam {value}",
        align: "center",
      },
    },
    yAxis: [
      {
        type: "value",
        name: "Average Score",
        position: "left",
        alignTicks: true,
        axisLine: {
          show: true,
        },
        axisLabel: {
          formatter: "{value}",
        },
      },
      {
        type: "value",
        name: "Average Score1",
        position: "right",
        alignTicks: true,
        axisLine: {
          show: true,
        },
        axisLabel: {
          formatter: "{value}",
        },
      },
    ],
    legend: {
      data: legend,
      icon: "rect",
    },
    series: [
      {
        name: "2021",
        data: validateData(dataLength, dataS),
        type: "line",
        //Size dot
        //   symbolSize: 10,
        symbol: "none",
        //Color line
        itemStyle: {
          color: "#80AAA8",
          // opacity: 0.2,
        },
        //Size line
        lineStyle: {
          width: 4,
        },
        // markLine: {
        //   symbol: ["none", "none"],
        //   symbolOffset: ["none", "none"],
        //   label: { show: false },
        //   data: xAxis,
        // },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(1, 0, 1, 1, [
            {
              offset: 0,
              color: "#78ACA4",
            },
            {
              offset: 1,
              color: "#D2DBDA",
            },
          ]),
          // opacity: 0.3,
        },
      },
      {
        name: "Bar1",

        data: [
          [0, 30],
          [1, 30],
          [2, 50],
          [3, 40],
          [4, 60],
          [5, 70],
          [6, 80],
        ],
        type: "bar",
        z: 10,
        barWidth: "1",
        itemStyle: {
          color: "#80AAA8",
          borderWidth: 1,
          borderType: "dashed",
        },
      },
      {
        itemStyle: {
          borderColor: "#80AAA8",
          color: "white",
          borderWidth: 3,
        },
        data: [
          [0, 30],
          [1, 30],
          [2, 50],
          [3, 40],
          [4, 60],
          [5, 70],
          [6, 80],
        ],
        type: "scatter",
        z: 10,
        tooltip: {
          trigger: "none",
        },
      },
      {
        itemStyle: {
          color: "#4D8AE3",
          borderWidth: 1,
          borderType: "dashed",
        },
        name: "Bar2",
        data: [
          [0.3, 30],
          [1.3, 30],
          [2.3, 50],
          [3.3, 40],
          [4.3, 60],
          [5.3, 70],
          [6.3, 80],
        ],
        type: "bar",
        z: 10,
        barWidth: "1",
        tooltip: {
          trigger: "axis",
        },
      },
      {
        itemStyle: {
          borderColor: "#4D8AE3",
          color: "white",
          borderWidth: 3,
          // opacity: 0.2,
        },
        data: [
          [0.3, 30],
          [1.3, 30],
          [2.3, 50],
          [3.3, 40],
          [4.3, 60],
          [5.3, 70],
          [6.3, 80],
        ],
        type: "scatter",
        z: 10,
        tooltip: {
          trigger: "none",
        },
      },
    ],
    // series: [
    //   ...seriesDemo,
    //   //

    //   // {
    //   //   type: "bar",
    //   //   stack: "x",
    //   //   data: [2, 2, 2, 2, 2, 2, 2, 2, 2],
    //   //   roundCap: true,
    //   // },

    //   {
    //     type: "scatter",
    //     data: [2, 4, 7, 23, 25, 76, 50, 12, 20],
    //     itemStyle: {
    //       color: "white",
    //       borderColor: "green",
    //     },
    //   },
    // ],
  };
};
// export const getOptions1: ReactEChartsProps["option"] = {
//   tooltip: {
//     trigger: "axis",
//     axisPointer: { type: "cross" },
//   },
//   xAxis: {
//     type: "category",
//     boundaryGap: false,
//     name: "Month",
//     data: ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9"],
//   },
//   yAxis: {
//     type: "value",
//     name: "Income",
//   },
//   legend: {
//     data: ["2021", "2022"],
//   },
//   series: [
//     {
//       name: "2021",
//       data: [60, 65, 70, 75, 80, 85, 90, 95, 100],
//       type: "line",
//       symbolSize: 10,
//       lineStyle: {
//         width: 4,
//       },
//       itemStyle: {
//         color: "#80AAA8",
//       },
//       markLine: {
//         symbol: ["10", "10"],
//         symbolOffset: ["-10", "-10"],
//         label: { show: true },
//         data: [{ xAxis: 1 }, { xAxis: 2 }, { xAxis: 3 }, { xAxis: 4 }],
//       },
//       areaStyle: {
//         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//           {
//             offset: 0,
//             color: "#78ACA4",
//           },
//           {
//             offset: 1,
//             color: "#D2DBDA",
//           },
//         ]),
//       },
//     },
//   ],
// };
