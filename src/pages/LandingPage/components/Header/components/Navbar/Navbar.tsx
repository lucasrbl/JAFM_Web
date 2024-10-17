import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

type NavLinksTypes = {
  links: {
    to: string;
    key: string;
    variant: 'primary' | 'secondary';
    children: string;
  }[];
};

export const Navbar = ({ links }: NavLinksTypes) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  return (
    <div>
      <nav className='md:hidden'>
        <div>
          <Menu className='m-5 w-5 h-5' onClick={openSidebar} />
        </div>

        {isSidebarOpen && (
          <aside className='sidebar'>
            <div className='flex justify-end p-3' onClick={closeSidebar}>
              {/* Adicionar animação da sidebar no momento em que ela abre, ver referência */}
              <X className='h-6 w-6 text-primary-color ' />
            </div>
            <ul className='absolute m-10 flex flex-col gap-3'>
              {links.map((link) => (
                <li>
                  <Link
                    to={link.to}
                    key={`${link.key}_${link.variant}`}
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
          </aside>
        )}
      </nav>
      <nav className='hidden md:flex'>
        <ul className='md:flex md:gap-4 md:mx-8 hidden'>
          {links.map((link) => (
            <li>
              <Link
                to={link.to}
                key={`${link.key}_${link.variant}`}
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
      </nav>
    </div>
  );
};
