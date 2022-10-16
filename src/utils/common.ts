import { SeriesOption } from "echarts";
import { CallbackDataParams } from "echarts/types/dist/shared";
import * as echarts from "echarts/core";

export const validateData = (length: number, data: any[], sttChart = 0) => {
  if (data && data.length === length) return formatData(data, sttChart);
  if (data.length > length) return formatData(data.slice(0, length), sttChart);
  const newData = data.concat(new Array(length - data.length).fill(0));
  return formatData(newData, sttChart);
};
export const formatData = (data: any[], stt = 0) => {
  const arr = data.map((item, idx) => {
    return [idx + 0.3 * stt, item].map(Number);
  });
  console.log(arr);
  return arr;
};
export const generateCustomBarChart = (
  name: string,
  dataLength: number,
  dataBar: any[],
  color: string,
  sttChart: number = 0
): SeriesOption[] => {
  return [
    {
      name: name,
      type: "bar",
      data: validateData(dataLength, dataBar, sttChart),
      barWidth: "1",
      barMaxWidth: 1,
      itemStyle: {
        color: "white",
        borderColor: color,
        borderWidth: 1,
        borderType: "dashed",
      },
      zlevel: 9,
    },
    {
      name: name,
      type: "scatter",
      z: 10,
      data: validateData(dataLength, dataBar, sttChart),
      itemStyle: {
        borderColor: color,
        color: "white",
        borderWidth: 3,
      },
      tooltip: {
        trigger: "none",
      },
    },
  ];
};

export const generateOptionLineChart = (
  name: string,
  dataLength: number,
  dataLineChart: any[],
  color: string,
  color1: string
): SeriesOption => {
  return {
    name: name,
    data: validateData(dataLength, dataLineChart),
    type: "line",
    symbol: "none",

    lineStyle: {
      width: 4,
    },
    itemStyle: {
      color: color,
    },
    areaStyle: {
      color: new echarts.graphic.LinearGradient(1, 0, 1, 1, [
        {
          offset: 0,
          color: color,
        },
        {
          offset: 1,
          color: color1,
        },
      ]),
    },
  };
};
export const formatterXAxis = (value: number): string => {
  return "Exam" + (value + 1);
};
export const formaterTooltip = (
  params: CallbackDataParams | CallbackDataParams[]
) => {
  console.log(typeof params, params);
  let marker: any = "";
  let index: any = "";
  let tooltips: any[] = [];
  if (Array.isArray(params)) {
    tooltips = params.map((param: CallbackDataParams) => {
      marker = (param?.marker as string).replace(
        "white",
        param?.borderColor as string
      );
      index = params[0].dataIndex;
      return marker + param.seriesName + ": " + (param.data as any[])[1];
    });
    tooltips.unshift(`Exam ${params[0].dataIndex + 1}`);
  }
  return tooltips.join("<br/>");
};
