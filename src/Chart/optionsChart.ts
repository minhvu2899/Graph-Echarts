import type { SeriesOption } from "echarts";
import * as echarts from "echarts/core";
import { ReactEChartsProps } from "../components/ReactECharts";
import {
  formaterTooltip,
  formatterXAxis,
  generateCustomBarChart,
  generateOptionLineChart,
  validateData,
} from "../utils/common";

export const getOptions = (
  dataLength: number,
  dataLine1: any[] | undefined = undefined,
  dataLine2: any[] | undefined = undefined,
  dataBar1: any[] | undefined = undefined,
  dataBar2: any[] | undefined = undefined
): ReactEChartsProps["option"] => {
  const xAxis = new Array(dataLength)
    .fill(0)
    .map((_, index): { xAxis: number } => {
      return { xAxis: index };
    });
  let legend = [];
  const seriesDemo: SeriesOption | SeriesOption[] = [];
  if (dataLine1) {
    const nameChart = "2021";
    const seriesLine1 = generateOptionLineChart(
      nameChart,
      dataLength,
      dataLine1,
      "#80AAA8",
      "#D2DBDA"
    );
    seriesDemo.push(seriesLine1);
    legend.push(nameChart);
  }

  if (dataLine2) {
    const nameChart = "2022";
    const seriesLine2 = generateOptionLineChart(
      nameChart,
      dataLength,
      dataLine2,
      "#4D8AE3",
      "#D2DBDA"
    );
    seriesDemo.push(seriesLine2);
    legend.push(nameChart);
  }
  if (dataBar1) {
    const nameChart = "Bar1";
    const seriBar1 = generateCustomBarChart(
      nameChart,
      dataLength,
      dataBar1,
      dataBar2 ? "#4D8AE3" : "#78ACA4"
    );
    seriesDemo.push(...seriBar1);
    legend.push(nameChart);
  }
  if (dataBar2) {
    const nameChart = "Bar2";
    const seriBar2 = generateCustomBarChart(
      nameChart,
      dataLength,
      dataBar2,
      "#78ACA4",
      1
    );
    seriesDemo.push(...seriBar2);
    legend.push(nameChart);
  }

  return {
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "shadow" },
      formatter: formaterTooltip,
    },
    title: {
      text: "ECharts Demo",
    },
    xAxis: {
      type: "value",
      name: "Exam",
      boundaryGap: false,
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      show: true,
      axisLabel: {
        formatter: formatterXAxis,
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
      icon: "rect", //pin,circle,rect
    },
    series: [...seriesDemo],
  };
};
