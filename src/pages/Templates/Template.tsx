import { Outlet } from 'react-router-dom';
import { Logo } from './components/Logo/Logo';

import { useGlobalContext } from '@/context/useGlobalContext';
import { If } from '@/components/If/If';

const Template = () => {
  const { isMobile } = useGlobalContext();

  return (
    <section>
      <If condition={isMobile}>
        <div className='md:hidden'>
          <Outlet />
        </div>
      </If>

      <If condition={!isMobile}>
        <div className='template hidden md:flex'>
          <Logo />
          <Outlet />
        </div>
      </If>
    </section>
  );
};

export default Template;
