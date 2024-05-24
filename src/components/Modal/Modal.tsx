import React, { useState } from 'react'
import { Bar } from "react-chartjs-2";
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale,  
  BarElement,
  Title,
  Tooltip,
  Legend,  
  LineController,
  LineElement,
  PointElement
} from "chart.js"
import { dataTypes } from "../../types/Data";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineController,
  LineElement,
  PointElement
)

interface PropTypes {
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
    names: string[];
    progresses: number[];
}


const BarChart: React.FC<{ names: string[]; progress: number[]; }> = ({ names, progress }) => {

  const data: dataTypes = {
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
  return <Bar className="mx-12 py-10" options={options} data={data}/> 
};



const Modal: React.FC<PropTypes> = ({isOpen, setOpen, names, progresses}) => {
  const [index, setIndex] = useState<number>(0);


  const handleNextChart = () => {
    setIndex((prev) => (prev + 1) % 2);
  }

  const handlePrevChart = () => {
    setIndex((prev) => (prev - 1) % 2);
  }
  return isOpen ? (
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-black/50 flex items-center justify-center'>
        <div className='bg-[#141627] w-4/5 relative'>
          {index === 0 && <BarChart key={0} names={names} progress={progresses}/>}

            <button className='w-40 text-white absolute top-4 right-4 h-10' onClick={() => setOpen(!isOpen)}>&times;</button>
            {/*<button className='w-40 text-white absolute top-64 -left-14 h-10' onClick={handlePrevChart}>&lt;</button>
            <button className='w-40 text-white absolute top-64 -right-10 h-10' onClick={handleNextChart}>&gt;</button>*/}
        </div>
    </div>
  ) : null
}

export default Modal