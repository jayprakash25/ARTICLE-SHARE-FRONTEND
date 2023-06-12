import { Bar, Line } from "react-chartjs-2";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js/auto";
export default function BarGraph({ dropdown }) {
  const labels = ["Views", "Total Views", "Post Shared", "Total Earnings "];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Your Graph",
        data: [80, 50, 60, 90],
        backgroundColor: ["#5a7bfb", "#5a7bfb", "#5a7bfb", "#5a7bfb"],
        fill: true,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        barPercentage: 0.5, // Adjust the width of the bars (0.6 means 60% of the available space)
      },
    },
  };

  ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

  return (
    <div className="md:px-7 px-2.5">
      <div
        className={`px-10 bg-white   ${dropdown ? "my-16" : null} -z-50`}
        style={{ width: "100%", height: "400px" }}
      >
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
