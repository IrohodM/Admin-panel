import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register Chart.js modules
ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const DashboardChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const labels = [
      "فروردین",
      "اردیبهشت",
      "خرداد",
      "تیر",
      "مرداد",
      "شهریور",
      "مهر",
      "آبان",
      "آذر",
      "دی",
      "بهمن",
      "اسفند",
    ];
    const datapoints = [0, 20, 20, 60, 60, 120, 180, 120, 125, 105, 110, 170];

    setChartData({
      labels,
      datasets: [
        {
          label: "فروش سالانه",
          data: datapoints,
          borderColor: "rgba(40, 22, 200, 1)",
          // backgroundColor: "rgba(75,192,192,0.2)",
          backgroundColor: "rgba(40, 22, 200, 1)",
          pointStyle: "circle",
          pointRadius: 6,
          pointHoverRadius: 10,
          fill: true,
        },
      ],
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      // title: { display: true, text: "نمودار فروش 1 سال گذشته" },
    },
  };

  return <Line data={chartData} options={options} height={195} />;
};

export default DashboardChart;
