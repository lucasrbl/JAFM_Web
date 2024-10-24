import { useEffect, useState } from 'react';
import { benefitsCardsData } from '@/data/benefitsCardsData';

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((index) => {
      return (index + 1) % benefitsCardsData.length;
    });
  };

  useEffect(() => {
    const intervalId = setInterval(handleNext, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className='w-full md:hidden z-0'>
      <div className='overflow-hidden'>
        <div
          className='flex transition-transform duration-500'
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {benefitsCardsData.map((card, index) => (
            <div key={index} className='min-w-full p-4'>
              <div className='p-6 border border-gray-300 rounded-lg'>
                <card.Icon className='text-primary-color w-12 h-12 mb-4' />
                <h3 className='text-xl font-semibold mb-2'>{card.title}</h3>
                <p className='text-gray-600'>{card.paragraphs}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
