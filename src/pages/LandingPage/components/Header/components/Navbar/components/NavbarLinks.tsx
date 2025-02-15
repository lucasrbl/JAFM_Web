import { If } from '@/components';
import { Link } from 'react-router-dom';

type NavbarPropsType = {
  device: 'desktop' | 'mobile';
};

export type NavbarLinksType = {
  key: string;
  children: string;
  to: string;
  variant: 'primary' | 'secondary';
}[];

const navbarLinksData: NavbarLinksType = [
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
];

export const NavbarLinks = ({ device }: NavbarPropsType) => {
  return (
    <>
      <If condition={device === 'mobile'}>
        <ul className='absolute m-10 flex flex-col gap-3'>
          {navbarLinksData.map((link) => (
            <li key={`${link.key}_mobile`}>
              <Link
                to={link.to}
                className={`${
                  link.variant === 'primary'
                    ? 'primary-links-mobile'
                    : 'text-primary-color'
                }`}
              >
                {link.children}
              </Link>
            </li>
          ))}
        </ul>
      </If>

      <If condition={device === 'desktop'}>
        <ul className='md:flex md:gap-4 md:mx-8 hidden'>
          {navbarLinksData.map((link) => (
            <li key={`${link.key}_desktop`}>
              <Link
                to={link.to}
                className={`${
                  link.variant === 'primary'
                    ? 'primary-links-desktop'
                    : 'secondary-links-desktop'
                }`}
              >
                {link.children}
              </Link>
            </li>
          ))}
        </ul>
      </If>
    </>
  );
};
