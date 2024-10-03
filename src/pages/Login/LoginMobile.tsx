import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import mobileHero from '@/assets/images/mobile-hero.svg';
import { Label } from '@/components/Label/Label';
import { Input } from '@/components/Input/Input';

export const LoginMobile = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className='flex justify-center flex-col h-screen'>
      <div>
        <img src={mobileHero} width='250px' className='m-auto' />
      </div>
      <form>
        <div className='flex flex-col items-center gap-3'>
          <div className='w-4/5'>
            <Label responsive='mobile' label='Email' htmlFor='email' />
            <Input
              variant='regular'
              responsive='mobile'
              placeholder='Digite seu email'
              id='email'
            />
          </div>

          <div className='w-4/5 relative'>
            <Label label='Senha' responsive='mobile' htmlFor='password' />
            <Input
              responsive='mobile'
              variant='password'
              type={showPassword ? 'text' : 'password'}
              placeholder='Digite sua senha'
              id='password'
            />
            <div
              className='absolute top-8 right-3'
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

        <div className='flex flex-col gap-3 justify-center items-center mt-5'>
          <button className='bg-gradient-to-r from-primary-color to-secondary-red rounded-md text-white w-2/4 px-4 py-1'>
            Login
          </button>
          <button className='bg-transparent border-transparent text-primary-color text-sm'>
            Registre-se
          </button>
        </div>
      </form>
    </section>
  );
};
