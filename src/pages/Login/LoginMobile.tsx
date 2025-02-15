import mobileHero from '@/assets/images/mobile-hero.svg';
import { Label, Input } from '@/components';
import { useUser } from '@/hooks';

export const LoginMobile = () => {
  const { handleInput, user } = useUser();

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
              device='mobile'
              placeholder='Digite seu email'
              id='email'
              name='email'
              value={user.email}
              onChange={handleInput}
            />
          </div>

          <div className='w-4/5 relative'>
            <Label label='Senha' responsive='mobile' htmlFor='password' />
            <Input
              device='mobile'
              variant='password'
              placeholder='Digite sua senha'
              id='password'
              onChange={handleInput}
              name='password'
              value={user.password}
            />
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
