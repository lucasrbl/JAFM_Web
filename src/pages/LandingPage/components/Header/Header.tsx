import logo from '@/assets/images/JAFM_LOGO.png';
import { useLayoutEffect, useState } from 'react';
import { Navbar } from './components/Navbar/Navbar';

export const Header = () => {
  const [isScrolledDown, setIsScrolledDown] = useState<boolean>(false);

  useLayoutEffect(() => {
    const handleScroll = () => {
      setIsScrolledDown(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`md:sticky top-0 left-0 ${
        isScrolledDown
          ? 'bg-white drop-shadow-md'
          : 'bg-transparent drop-shadow-none'
      } `}
    >
      <div className='flex items-center justify-between'>
        <div className='px-4 py-4 mx-2'>
          <a href='/'>
            <img
              src={logo}
              alt='Logo do JAFM'
              className='w-10 h-10 md:w-12 md:h-12'
            />
          </a>
        </div>
        <Navbar
          links={[
            {
              key: 'Sobre',
              children: 'Sobre',
              to: '/sobre',
              variant: 'secondary',
            },
            {
              key: 'Planos',
              children: 'Planos',
              to: '/planos',
              variant: 'secondary',
            },
            {
              key: 'Login',
              children: 'Clique e confira!',
              to: '/acesso',
              variant: 'primary',
            },
          ]}
        />
      </div>
    </header>
  );
};
