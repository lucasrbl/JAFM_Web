import { useEffect, useState } from 'react';
import { FastForward, Monitor, LineChart } from 'lucide-react';

export const Carousel = () => {
  const cards = [
    {
      Icon: FastForward,
      paragraphs:
        'Visualize o desenvolvimento do jovem a partir de relátorios com diferentes métricas, gráficos e tabelas, trazendo novos insights para uma melhor tomada de decisão',
      title: 'Visualize os Dados de Forma Diversificada',
    },
    {
      Icon: Monitor,
      paragraphs:
        'Nosso sistema responsivo permite acesso em qualquer dispositivo e integrações poderosas com ferramentas como Power BI para uma gestão completa e eficiente.',
      title: 'Acesse de Qualquer Lugar, a Qualquer Hora!',
    },
    {
      Icon: LineChart,
      paragraphs:
        'Com o aplicativo para dispositivos móveis do Jovem Aprendiz Forms Management, o jovem pode acompanhar seu próprio desenvolvimento e conferir seus certificados',
      title: 'Torne o Processo Intuitivo para o Jovem',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const isLastSlide = currentIndex === cards.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(handleNext, 3000);

    () => clearInterval(intervalId);
  }, []);

  return (
    <div className='relative w-full'>
      <div className='overflow-hidden'>
        <div
          className='flex transition-transform duration-500'
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cards.map((card, index) => (
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
      <button
        onClick={handleNext}
        className='absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2'
      >
        &#10095;
      </button>
    </div>
  );
};
