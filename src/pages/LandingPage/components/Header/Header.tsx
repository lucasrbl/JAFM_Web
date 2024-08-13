import logo from '@/assets/images/JAFM_LOGO.png';
import { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

type HeaderLinksPropTypes = {
  links: {
    to: string;
    key: string;
    variant: 'primary' | 'secondary';
    children: string;
  }[];
};

export const Header = ({ links }: HeaderLinksPropTypes) => {
  const [isScrolledDown, setIsScrolledDown] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  useLayoutEffect(() => {
    const handleScroll = () => {
      setIsScrolledDown(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 left-0 ${
        isScrolledDown
          ? 'bg-white drop-shadow-md'
          : 'bg-transparent drop-shadow-none'
      } `}
    >
      <div className='flex items-center justify-between'>
        <div className='px-4 py-4 ml-2'>
          <a href='/'>
            <img
              src={logo}
              alt='Logo do JAFM'
              className='w-10 h-10 md:w-12 md:h-12'
            />
          </a>
        </div>

        <nav className='md:hidden'>
          <div>
            <Menu className='m-5 w-5 h-5' onClick={() => setOpenModal(true)} />
          </div>

          {openModal && (
            <aside className='fixed right-0 top-0 w-8/12 overflow-y-auto h-screen rounded-md bg-gradient-to-b from-white from-60%  via-primary-color via-100% shadow-md'>
              <div
                className='flex justify-end p-3'
                onClick={() => setOpenModal(false)}
              >
                <X className='h-6 w-6 text-primary-color ' />
              </div>
              <ul className='absolute m-10 flex flex-col gap-3'>
                {links.map((link) => (
                  <li>
                    <Link
                      to={link.to}
                      key={link.key}
                      className={`${
                        link.variant === 'primary'
                          ? 'bg-primary-color rounded-xl text-white font-bold py-1 px-3'
                          : 'text-primary-color'
                      }`}
                    >
                      {link.children}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </nav>
        <nav className='hidden md:flex'>
          <ul className='md:flex md:gap-4 md:mr-5 hidden'>
            {links.map((link) => (
              <li>
                <Link
                  to={link.to}
                  key={link.key}
                  className={`${
                    link.variant === 'primary'
                      ? 'bg-primary-color rounded-xl text-white hover:bg-white border-2 border-primary-color font-bold py-1 px-3 transition ease-in-out delay-[50ms] hover:text-primary-color'
                      : 'text-primary-color hover:text-secondary-red transition ease-in-out delay-[50ms]'
                  }`}
                >
                  {link.children}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
