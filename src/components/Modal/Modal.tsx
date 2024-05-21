import React from 'react'
import { BarChart } from '../BarChart';

interface PropTypes {
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;


}

const Modal: React.FC<PropTypes> = ({isOpen, setOpen}) => {
  return isOpen ? (
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-black/50 flex items-center justify-center'>
        <div className='bg-[#141627] w-4/5'>
            <BarChart />
            <button className='w-40 text-white' onClick={() => setOpen(!isOpen)}>&times;</button>
        </div>
    </div>
  ) : null
}

export default Modal