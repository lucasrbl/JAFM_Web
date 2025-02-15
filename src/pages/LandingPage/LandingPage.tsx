import { Outlet, useNavigate } from 'react-router-dom';
import { Header, Footer } from './components/index';

import {LinkButton} from '../../../dist/components/Button';

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <section className='bg-gradient-to-b from-white from-60%  via-primary-color via-100%'>
      <Header />
      <Outlet />
      <hr className='h-px bg-white opacity-30 mb-5' />

      <LinkButton>
        <button onClick={() => navigate('teste')}>Teste</button>
      </LinkButton>
      <Footer />
    </section>
  );
};
