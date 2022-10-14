import { ReactEChartsProps } from "../components/ReactECharts";
import type { SeriesOption } from "echarts";
import * as echarts from "echarts/core";
import { validateData } from "../utils/validataData";

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
      data: validateData(dataLength, dataBar1),
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
    legend.push("Bar1");
  }
  if (dataBar2) {
    seriesDemo.push({
      name: "Bar2",
      type: "bar",
      data: validateData(dataLength, dataBar2),
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
  }

  return {
    // grid: {
    //   left: "3%",
    //   right: "4%",
    //   bottom: "3%",
    //   containLabel: true,
    // },
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "shadow" },
    },
    title: {
      text: "ECharts Demo",
    },
    xAxis: {
      type: "category",
      name: "Exam",
      boundaryGap: true,
      data: dataC,
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
      ...seriesDemo,
      //

      // {
      //   type: "bar",
      //   stack: "x",
      //   data: [2, 2, 2, 2, 2, 2, 2, 2, 2],
      //   roundCap: true,
      // },
      {
        type: "scatter",
        data: [5, 8, 7, 20, 22, 50, 40, 12, 20],
        itemStyle: {
          color: "white",
          borderColor: "green",
        },
      },
      {
        type: "scatter",
        data: [2, 4, 7, 23, 25, 76, 50, 12, 20],
        itemStyle: {
          color: "white",
          borderColor: "green",
        },
      },
    ],
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
