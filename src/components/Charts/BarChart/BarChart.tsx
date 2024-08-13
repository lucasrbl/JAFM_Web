import { Bar } from "react-chartjs-2";
import { BarTypes } from "../../../types/ChartsTypes";

const BarChart: React.FC<{ names: string[]; progress: number[]; }> = ({ names, progress }) => {

    const data: BarTypes = {
      labels: names,
  
      datasets: [
        {
          label: "Progresso",
          data: progress,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
      ],
      progress: []
    };
    const options = {};
    return <Bar className="my-16 mx-12" options={options} data={data}/> 
  };


export default BarChart