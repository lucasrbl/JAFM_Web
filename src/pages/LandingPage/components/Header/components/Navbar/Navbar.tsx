import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavbarLinks } from './components/NavbarLinks';

export const Navbar = () => {
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
              <X className='h-6 w-6 text-primary-color ' />
            </div>
            <NavbarLinks device='mobile' />
          </aside>
        )}
      </nav>
      <nav className='hidden md:flex'>
        <NavbarLinks device='desktop' />
      </nav>
    </div>
  );
};
