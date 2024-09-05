import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserDataType, userSchema } from '../../types/UserTypes';

export const Login = () => {
  const { register, handleSubmit } = useForm<UserDataType>({
    resolver: zodResolver(userSchema),
  });

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
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [passDouble, setPassDouble] = useState('');
  const [errorLogin, setErrorLogin] = useState(false);
  const [telefone, setTelefone] = useState('');
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [filial, setFilial] = useState('');
  const [turma, setTurma] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const teste = useRef<HTMLInputElement>(null);

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
    <div className='md:flex md:justify-center md:items-center ml-auto md:w-1/3 login-screen-gradient overflow-y-scroll'>
      <div className='flex flex-col items-center'>
        <p className='text-white text-xl font-bold font-vietnam mb-5'>Login</p>

        <form className='flex flex-col gap-5 items-center'>
          <div className='flex flex-col gap-2.5'>
            <label
              htmlFor='email'
              className='text-white font-vietnam text-xs font-bold'
            >
              E-mail
            </label>
            <input
              className='rounded-xl w-72 px-6 py-1.5'
              id='email'
              type='email'
              name='email'
              value={email}
            />
          </div>

          <div className='flex flex-col gap-2.5'>
            <label
              htmlFor='password'
              className='text-white font-vietnam text-xs font-bold'
            >
              Senha
            </label>
            <input
              className='rounded-xl w-72 px-6 py-1.5'
              id='password'
              type='password'
              value={pass}
            />
          </div>

          <div className='flex flex-col items-center gap-6'>
            {/*<button className="text-white underline font-bold" onClick={() => navigate("/forgot-my-password")}>
                  Esqueci minha senha
                  </button>*/}

            <button
              className='rounded-md bg-gradient-to-r from-primary-color to-secondary-red w-40 h-8 px-12 text-white font-vietnam'
              onClick={() => console.log('')}
            >
              Entrar
            </button>

            {errorLogin == true && (
              <div className='flex flex-col items-center text-red-500'>
                <p>Usuário ou senha inválidos, por favor, tente novamente!</p>
              </div>
            )}

            <button
              className='text-white font-bold'
              onClick={() => console.log(teste.current)}
            >
              Quero me cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
