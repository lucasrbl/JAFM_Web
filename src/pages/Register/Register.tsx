import { Link } from 'react-router-dom';
import { Input, Label } from '@/components';
import { classesData } from '@/data/ClassesData';
import { useUser } from '@/hooks';
import { useEffect } from 'react';
import { formatCpf, formatPhoneNumber } from '@/utils';

export const Register = () => {
  const { user, handleInput } = useUser();

  useEffect(() => {});

  return (
    <div className='flex h-full justify-center items-center ml-auto w-1/3 access-screen-gradient py-12'>
      <div className='flex flex-col items-center h-full overflow-scroll scrollbar overflow-x-hidden'>
        <p className='text-white text-xl font-bold font-vietnam mb-5'>
          Cadastro
        </p>

        <div className='flex flex-col gap-5 items-center'>
          <div className='flex flex-col gap-2.5'>
            <Label htmlFor='email' label='Email' responsive='desktop' />
            <Input
              responsive='desktop'
              id='email'
              type='email'
              variant='regular'
              name='email'
              value={user.email}
              onChange={handleInput}
            />
          </div>

          <div className='flex flex-col gap-2.5'>
            <Label htmlFor='name' label='Nome' responsive='desktop' />
            <Input
              device='desktop'
              id='name'
              type='text'
              variant='regular'
              name='name'
              value={user.name}
              onChange={handleInput}
            />
          </div>

          <div className='flex flex-col gap-2.5 relative'>
            <Label responsive='desktop' htmlFor='password' label='Senha' />
            <Input
              device='desktop'
              id='password'
              variant='password'
              value={user.password}
              name='password'
              onChange={handleInput}
            />
          </div>

          {/* The input down below is not gonna be variant "password" 
          because it is a confirmation password, 
          so it wouldn't need two icons to show the password */}
          <div className='flex flex-col gap-2.5 relative'>
            <Label
              label='Digite novamente a senha:'
              responsive='desktop'
              htmlFor='confirmPassword'
            />
            <Input
              device='desktop'
              variant='confirmPassword'
              type='password'
              id='confirmPassword'
              value={user.confirmPassword}
              name='confirmPassword'
              onChange={handleInput}
            />
          </div>

          <div className='flex flex-col gap-2.5'>
            <Label label='Telefone:' responsive='desktop' htmlFor='phone' />
            <Input
              device='desktop'
              variant='regular'
              id='phone'
              name='phone'
              value={formatPhoneNumber(user.phone)}
              onChange={handleInput}
              maxLength={11}
            />
          </div>

          <div className='flex flex-col gap-2.5'>
            <Label label='CPF:' htmlFor='cpf' responsive='desktop' />
            <Input
              device='desktop'
              variant='regular'
              id='cpf'
              name='cpf'
              value={formatCpf(user.cpf)}
              onChange={handleInput}
            />
          </div>

          <div className='flex flex-col gap-2.5'>
            <Label
              label='Selecione a filial em que você trabalha'
              responsive='desktop'
              htmlFor='affiliate'
            />
            <select
              id='affiliate'
              value={user.affiliate}
              name='affiliate'
              onChange={handleInput}
              className='bg-gray-50 border w-72 border-gray-300 text-gray-900 text-xs rounded-xl focus:ring-0 focus:outline-none focus:white p-2.5'
            >
              <option selected>Escolha uma filial</option>
              {classesData.map((affiliate) => (
                <option key={affiliate.city} value={affiliate.city}>
                  {affiliate.city}
                </option>
              ))}
            </select>
          </div>

          <div className='flex flex-col gap-2.5'>
            <label
              htmlFor='class'
              className='text-white font-vietnam text-xs font-bold'
            >
              Selecione agora suas turmas:
            </label>
            <select
              id='class'
              value={user.class}
              onChange={handleInput}
              name='class'
              className='bg-gray-50 border w-72 border-gray-300 text-gray-900 text-xs rounded-xl focus:ring-0 focus:outline-none focus:white p-2.5'
            >
              <option selected>Selecione as turmas:</option>
              {classesData.map((affiliate) => (
                <option
                  value={
                    affiliate.classes
                  } /*disabled={affiliate.city !== filial}*/
                >
                  {affiliate.classes.join(',')}
                </option>
              ))}
            </select>
          </div>

          <div className='flex flex-col gap-2.5'>
            <label
              htmlFor='birthDate'
              className='text-white font-vietnam text-xs font-bold'
            >
              Data de Nascimento:
            </label>
            <input
              className='rounded-xl w-72 px-6 py-1.5'
              id='birthDate'
              type='text'
              value={user.birthDate}
              name='birthDate'
              onChange={handleInput}
            />
          </div>

          {/*<div className="flex flex-col gap-2.5">
                <label className="text-white font-vietnam text-xs font-bold" htmlFor="profileImg">Adicione uma imagem para seu perfil:</label>
                <input type="file" onChange={handleFileChange} className="rounded-xl w-72  py-1.5 text-white file:mr-5 file:rounded-md file:py-1 file:px-3 file:text-xs file:font-medium file:text-stone-700 hover:file:cursor-pointer hover:file:bg-gradient-to-r from-primary-color to-secondary-red" />
                </div>*/}

          <div className='flex flex-col items-center gap-6 px-2'>
            <button className='text-white font-bold font-vietnam'>
              Confira nossos termos de propriedade intelectual
            </button>

            <button className='rounded-md bg-gradient-to-r from-primary-color to-secondary-red w-40 h-8 px-10 text-white font-vietnam'>
              Cadastrar
            </button>

            <Link to='/acesso' className='text-white font-bold font-vietnam'>
              Fazer Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
