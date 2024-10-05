// Analytics.jsx
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import styles from "./Analyticis.module.css";
import Button from "../../defaults/Button/Button";

ChartJS.register(
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Analytics = ({ datasets, labels, title, onButtonClick }) => {
  const chartData = {
    labels,
    datasets: datasets.map((dataset, index) => ({
      label: dataset.label || `Dataset ${index + 1}`,
      data: dataset.data,
      borderColor: dataset.borderColor || "blue",
      fill: false,
    })),
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>{title || "Analytics"}</h3>
        <Button variant="viewmore" onClick={onButtonClick} >
          View Analytics
        </Button>
      </div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default Analytics;