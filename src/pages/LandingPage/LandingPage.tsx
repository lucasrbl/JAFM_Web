import { Outlet } from 'react-router-dom';
import { Header, Footer } from './components/index';

export const LandingPage = () => {
  return (
    <section className='bg-gradient-to-b from-white from-60%  via-primary-color via-100%'>
      <Header />
      <Outlet />
      <hr className='h-px bg-white opacity-30 mb-5' />
      <Footer />
    </section>
  );
};
