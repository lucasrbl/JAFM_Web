import { Github, Instagram, Linkedin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className='flex justify-center'>
      <hr className='bg-white' />
      <div>
        <p className='mb-2'>Contato e nossas Redes Sociais:</p>
        <div className='flex gap-5 justify-center pb-1'>
          <Link to={'/teste'}>
            <Instagram />
          </Link>

          <Link to={'/teste'}>
            <Linkedin />
          </Link>

          <Link to={''}>
            <Github />
          </Link>

          <Link to={''} className='flex gap-2'>
            <Phone /> <p>(15) 99617-8707</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};
