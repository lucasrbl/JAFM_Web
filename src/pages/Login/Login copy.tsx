import { useState } from 'react';
import { UserDataType } from '../../types/UserTypes';
import { Eye, EyeOff } from 'lucide-react';

export const LoginMobile = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowInputText = () => {
    const input: HTMLInputElement | null = document.querySelector('#password');

    if (input) {
      if (input.type === 'text') {
        setShowPassword(false);
        input.type = 'password';
      }

      setShowPassword(true);
      input.type = 'text';
    }
  };

  const [user, setUser] = useState<UserDataType>({
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    birthDate: '',
    cpf: '',
    name: '',
    affiliate: '',
    class: '',
  });

  return (
    <section className='bg-gradient-to-b from-primary-color to-secondary-red w-full'>
      <div>
        <h1 className='font-bold text-2xl text-center'>Login</h1>
      </div>
      <form>
        <div className='flex flex-col items-center gap-3'>
          <div className='w-4/5'>
            <label htmlFor='' className='font-bold block mb-1'>
              Email
            </label>
            <input
              type='email'
              className='w-full rounded-lg px-2 py-1'
              placeholder='Enter your email'
            />
          </div>

          <div className='w-4/5 relative'>
            <label htmlFor='' className='font-bold block mb-1'>
              Senha
            </label>
            <input
              type='password'
              className='w-full rounded-lg px-2 py-1'
              placeholder='Enter your password'
              id='password'
            />
            <div
              className='absolute top-8 left-[270px]'
              onClick={handleShowInputText}
            >
              {showPassword ? (
                <>
                  <EyeOff />
                </>
              ) : (
                <>
                  <Eye />
                </>
              )}
            </div>

            <div className='flex justify-end py-3'>
              <button className='bg-transparent border-transparent text-gray-200 text-xs'>
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
