import { ApexOptions } from "apexcharts";
import { stringify } from "querystring";
import React from "react";
import ReactApexChart from "react-apexcharts";

const AreaChart = () => {
  const options: ApexOptions = {
    chart: {
      height: 330,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      colors: ["rgba(255, 153, 60, 1)"],
    },
    xaxis: {
      categories: ["01", "13", "19", "31"],
    },
    fill: {
      colors: ["rgba(250, 160, 95, 0.26)", "rgba(255, 255, 255, 0)"],
    },
  };
  const series = [
    {
      name: "series1",
      data: [140, 180, 220, 260],
    },
  ];

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={330}
      />
    </div>
  );
};

export default AreaChart;
