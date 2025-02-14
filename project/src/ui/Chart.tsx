import { motion } from "framer-motion";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions
} from "chart.js";
import { Chart } from "react-chartjs-2";


ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);


type CombinedChartData = ChartData<"bar" | "line", number[], string>;


const options: ChartOptions<"bar" | "line"> = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Tasks Completed in Every Month"
    }
  },
  scales: {
    y: {
      stacked: true 
    }
  }
};


const generateRandomNumbers = (count: number, min: number, max: number): number[] =>
  Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1)) + min);

const labels: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];


const data: CombinedChartData = {
  labels,
  datasets: [
    {
      label: "Front-End",
      data: generateRandomNumbers(7, 0, 100),
      borderColor: "rgba(255, 99, 132, 1)", // Red
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      stack: "combined",
      type: "bar"
    },
    {
      label: "Back-End",
      data: generateRandomNumbers(7, 0, 100),
      borderColor: "rgba(54, 162, 235, 1)", // Blue
      backgroundColor: "rgba(54, 162, 235, 0.5)",
      stack: "combined",
      type: "line"
    }
  ]
};

export const BarChart: React.FC = () => {
  return (
        <div>
            
            <Chart type="bar" data={data} options={options} />;
        </div>
  )

};

