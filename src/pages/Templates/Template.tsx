import { Outlet } from 'react-router-dom';
import { Logo } from './components/Logo/Logo';

const Template = () => {
  return (
    <div className='template'>
      <Logo />
      <Outlet />
    </div>
  );
};

export default Template;
