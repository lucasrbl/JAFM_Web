import { Link } from 'react-router-dom';
import homeImage from '@/assets/images/home-image.png';
import { BenefitsCard, Carousel } from './components/index';
import { FastForward, Monitor, LineChart } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section>
      <article className='flex items-center justify-evenly'>
        <div className='flex flex-col gap-3 mx-5'>
          <h3 className=' text-2xl text-primary-color font-bold md:text-3xl'>
            Construindo um futuro brilhante!
          </h3>

          <h1 className='text-4xl text-primary-color font-bold md:text-6xl'>
            JAFM
          </h1>

          <h2 className='text-2xl text-primary-color font-bold md:text-4xl'>
            Aprender, crescer, prosperar!
          </h2>

          <div className='mt-5'>
            <Link
              to='/login'
              className='bg-primary-color rounded-xl text-white hover:bg-white border-2 hover:border-2 border-primary-color font-bold py-2 px-5 transition ease-in-out delay-[50ms] hover:text-primary-color'
            >
              Assine já
            </Link>
          </div>
        </div>
        <img src={homeImage} alt='' className='rounded-md hidden md:block' />
      </article>

      <article className='mt-8 mx-5'>
        <div>
          <div className='flex items-center justify-center flex-col gap-4 mb-8'>
            <h2 className='font-bold text-xl md:text-2xl'>
              <span className='text-primary-color'>A tecnologia</span> para
              gestão de jovens talentos
            </h2>
            <p className='text-base'>
              Acompanhe o desenvolvimento e performance de cada jovem aprendiz
              com a ferramenta de gerenciamento JAFM!
            </p>
          </div>
          <div className='flex gap-5 justify-center mb-16'>
            <Carousel />
            <BenefitsCard
              cards={[
                {
                  Icon: FastForward,
                  paragraphs:
                    'Visualize o desenvolvimento do jovem a partir de relátorios com diferentes métricas, gráficos e tabelas, trazendo novos insights para uma melhor tomada de decisão',
                  title: 'Visualize os Dados de Forma Diversificada',
                },
              ]}
            />
            <BenefitsCard
              cards={[
                {
                  Icon: Monitor,
                  paragraphs:
                    'Nosso sistema responsivo permite acesso em qualquer dispositivo e integrações poderosas com ferramentas como Power BI para uma gestão completa e eficiente.',
                  title: 'Acesse de Qualquer Lugar, a Qualquer Hora!',
                },
              ]}
            />
            <BenefitsCard
              cards={[
                {
                  Icon: LineChart,
                  paragraphs:
                    'Com o aplicativo para dispositivos móveis do Jovem Aprendiz Forms Management, o jovem pode acompanhar seu próprio desenvolvimento e conferir seus certificados',
                  title: 'Torne o Processo Intuitivo para o Jovem',
                },
              ]}
            />
          </div>
        </div>
      </article>
    </section>
  );
};
