import { useState } from 'react';
import { useGlobalContext } from '@/context/useGlobalContext';
import { LoginMobile } from './LoginMobile';
import { Label, Input } from '@/components';
import { Link } from 'react-router-dom';
import { If } from '@/components/If/If';

export const Login = () => {
  const { isMobile } = useGlobalContext();

  // const [user, setUser] = useState<UserDataType>({
  //   email: '',
  //   password: '',
  //   confirmPassword: '',
  //   phoneNumber: '',
  //   birthDate: '',
  //   cpf: '',
  //   name: '',
  //   affiliate: '',
  //   class: '',
  // });

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  //const [passDouble, setPassDouble] = useState('');
  const [errorLogin, setErrorLogin] = useState(false);
  //const [telefone, setTelefone] = useState('');
  //const [nome, setNome] = useState('');
  //const [cpf, setCpf] = useState('');
  //const [filial, setFilial] = useState('');
  //const [turma, setTurma] = useState('');
  //  const [dataNascimento, setDataNascimento] = useState('');
  // const handleLogin = () => {
  //   signInWithEmailAndPassword(auth, email, pass)
  //     .then((_userCredential) => {
  //       if (email.includes('@jafm.com')) {
  //         handleNavigation('/home');
  //       } else {
  //         setErrorLogin(true);
  //       }
  //     })
  //     .catch((error) => {
  //       setErrorLogin(true);
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.error('Erro ao fazer login:', errorCode, errorMessage);
  //     });
  // };

  // const handleInput = (e) => {
  //   setUser({ ...user, [e.target.name]: e.target.value });
  // };

  return (
    <>
      <If condition={isMobile}>
        <LoginMobile />
      </If>

      <If condition={!isMobile}>
        <div className='md:flex md:justify-center md:items-center ml-auto md:w-1/3 access-screen-gradient overflow-y-scroll'>
          <div className='flex flex-col items-center'>
            <p className='text-white text-xl font-bold font-vietnam mb-5'>
              Login
            </p>

            <form className='flex flex-col gap-5 items-center'>
              <div className='flex flex-col gap-2.5'>
                <Label htmlFor='email' label='Email' responsive='desktop' />
                <Input
                  responsive='desktop'
                  variant='regular'
                  id='email'
                  type='email'
                />
              </div>

              <div className='flex flex-col gap-2.5 relative'>
                <Label responsive='desktop' htmlFor='password' label='Senha' />
                <Input responsive='desktop' variant='password' id='password' />
              </div>

              <div className='flex flex-col items-center gap-4'>
                {/*<button className="text-white underline font-bold" onClick={() => navigate("/forgot-my-password")}>
                  Esqueci minha senha
                  </button>*/}

                <button className='rounded-md bg-gradient-to-r from-primary-color to-secondary-red w-40 h-8 px-12 text-white font-vietnam'>
                  Entrar
                </button>

                <If condition={errorLogin}>
                  <div className='flex flex-col items-center text-red-500'>
                    <p>
                      Usuário ou senha inválidos, por favor, tente novamente!
                    </p>
                  </div>
                </If>

                <Link to='/acesso/registrar' className='text-white font-bold'>
                  Quero me cadastrar
                </Link>
              </div>
            </form>
          </div>
        </div>
      </If>
    </>
  );
};
