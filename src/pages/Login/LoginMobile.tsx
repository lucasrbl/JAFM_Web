import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import mobileHero from '@/assets/images/mobile-hero.svg';

export const LoginMobile = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className='flex justify-center flex-col h-screen'>
      <div>
        <img src={mobileHero} width='250px' className='m-auto' />
        <h1 className='font-bold text-2xl text-center py-3'>Login</h1>
      </div>
      <form>
        <div className='flex flex-col items-center gap-3'>
          <div className='w-4/5'>
            <label htmlFor='' className='font-bold block mb-1'>
              Email
            </label>
            <input
              type='email'
              className='w-full rounded-lg px-2 py-2 bg-gray-200'
              placeholder='Enter your email'
            />
          </div>

          <div className='w-4/5 relative'>
            <label htmlFor='' className='font-bold block mb-1'>
              Senha
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              className='w-full rounded-lg px-2 py-2 bg-gray-200'
              placeholder='Enter your password'
              id='password'
            />
            <div
              className='absolute top-9 right-3'
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </div>

            <div className='flex justify-end py-3'>
              <button className='bg-transparent border-transparent text-slate-900 text-xs'>
                Esqueceu a senha?
              </button>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-2 justify-center items-center mt-5'>
          <button className='bg-primary-color rounded-full text-white w-2/4 px-4 py-1'>
            Login
          </button>

          <button className='bg-transparent border-transparent text-gray-100'>
            Registre-se
          </button>
        </div>
      </form>
    </section>
  );
};
