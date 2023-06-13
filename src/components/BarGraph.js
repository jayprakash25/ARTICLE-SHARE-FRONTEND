import { Bar, Chart, Line } from "react-chartjs-2";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js/auto";
export default function BarGraph({ dropdown }) {
  const fillGradient = {
    fill: true,
    backgroundColor: "rgba(91,33,182, 0.5)",
    gradient: {
      id: "fillGradient",
    },
  };

  const labels = ["Views", "Total Views", "Post Shared", "Total Earnings "];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Your Graph",
        data: [30, 20, 40, 20],
        ...fillGradient,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
  };

  ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

  return (
    <div className="md:px-7 px-2.5">
      <div
        className={` shadow-2xl shadow-slate-200 px-10 bg-white   ${
          dropdown ? "my-16" : null
        } -z-50`}
        style={{ width: "100%", height: "300px" }}
      >
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
