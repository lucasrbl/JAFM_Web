import { Pie } from "react-chartjs-2";
import { PieTypes } from "../../../types/ChartsTypes";

const PieChart: React.FC<{ names: string[]; progress: number[]; }> = ({ names, progress }) => {
    const data: PieTypes = {
      labels: names,
      datasets: [
        {
          label: "Progresso",
          data: progress,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)"
          ],
          hoverOffset: 4
        },
      ],
      progress: []
    };
    return <Pie className="m-auto py-5" options={{ maintainAspectRatio: false}} data={data} width={500} height={500}/> 
  };


export default PieChart