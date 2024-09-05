import { BenefitsCardType } from '@/types/BenefitsCardTypes';

export const BenefitsCard = ({ cards }: BenefitsCardType) => {
  return (
    <>
      {cards.map((card) => (
        <div
          className='w-80 h-72 border border-[#f55d5d63] rounded-lg hidden md:block'
          key={card.title}
        >
          <div className='mx-5 flex flex-col gap-5'>
            <div className='bg-primary-color p-1 flex items-center justify-center rounded-full w-10 h-10 mt-5'>
              <card.Icon className='w-5 h-5 text-white' />
            </div>
            <h3 className='font-bold text-xl'>{card.title}</h3>
            <p className='text-sm text-[#3b3939]'>{card.paragraphs}</p>
          </div>
        </div>
      ))}
    </>
  );
};
