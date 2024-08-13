import React, { useState } from 'react';
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
  PointElement,
  ArcElement
} from 'chart.js';
import BarChart from '../Charts/BarChart/BarChart';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineController,
  LineElement,
  PointElement,
  ArcElement
);

interface PropTypes {
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
    chartData: {
      barProgress: number[];
      otherBarProgress: number[];
      pieProgress?: number[];

      barNames: string[];
      otherBarNames: string[];
      pieNames?: string[];
    };    
}



const Modal: React.FC<PropTypes> = ({isOpen, setOpen, chartData }) => {
  const [index, setIndex] = useState<number>(0);
  
  const chartsData = [
    { type: 'Bar', names: chartData.barNames, progress: chartData.barProgress },
    { type: 'Bar', names: chartData.pieNames, progress: chartData.pieProgress }
  ];

  const handleNextChart = () => {
    setIndex((prev) => (prev + 1) % chartsData.length);
  };

  const handlePrevChart = () => {
    setIndex((prev) => (prev - 1 + chartsData.length) % chartsData.length);
  };


  return isOpen ? (
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-black/50 flex items-center justify-center'>
       <div className='bg-[#141627] w-3/5 relative h-4/5 rounded-md'>
         {index === 0 && <BarChart key={0} names={chartData.barNames} progress={chartData.barProgress}/>}
         {index === 1 && <BarChart key={1} names={chartData.otherBarNames} progress={chartData.otherBarProgress}/>}

           <button className='w-40 text-white absolute top-4 right-4 h-10' onClick={() => setOpen(!isOpen)}>&times;</button>
           <button className='w-40 text-white absolute top-64 -left-14 h-10' onClick={handlePrevChart}>&lt;</button>
           <button className='w-40 text-white absolute top-64 -right-10 h-10' onClick={handleNextChart}>&gt;</button>
       </div>
       </div>
         ) : null;
        };

export default Modal;
