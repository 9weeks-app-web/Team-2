"use client";
import React from "react";
import {
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import type { ChartOptions } from "chart.js";
import { Chart as ChartJS } from "chart.js/auto";
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
const option: ChartOptions<"radar"> & ChartOptions = {
  // maintainAspectRatio: false,
  responsive: false,
  elements: {
    //데이터 속성.
    line: {
      borderWidth: 9,
      borderColor: "#9f9a9a",
      // borderJoinStyle: "bevel",
      // borderCapStyle: "round",
    },
  },
  scales: {
    r: {
      ticks: {
        stepSize: 3,
        display: false,
      },
      grid: {},
      //라벨 속성 지정.
      pointLabels: {
        font: {
          size: 10,
          weight: 500,
          family: "Pretendard",
        },
        padding: 10,
        color: "black",
      },

      suggestedMin: 0,
      suggestedMax: 10,
    },
  },

  plugins: {
    legend: {
      display: false,
      labels: {
        usePointStyle: true,
      },
    },
  },

  animation: {},
};
const data = {
  labels: ["분석력", "설계력", "실행력", "공감능력", "성실함"],
  datasets: [
    {
      label: "나의 스팩카드",
      data: [8, 7, 10, 7, 8], // 임시데이터
      backgroundColor: "rgba(75, 141, 240, 0.2)",
      borderColor: "#3689fd",
      borderWidth: 2,
      pointRadius: 0,
      // pointHoverBackgroundColor: "#0f73ff", // 호버 배경색
      // pointHoverBorderWidth: 1, // 호버 테두리 두께
      tension: 0.05,
      spanGaps: true,
    },
  ],
};

type Props = {};

const ChartData = (props: Props) => {
  return <Radar data={data} options={option} width="210" height="174" />;
};
export default ChartData;
