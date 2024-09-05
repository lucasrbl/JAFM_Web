export const Register = () => {
  return (
    <div className='flex h-full justify-center items-center ml-auto w-1/3 bg-gradient-to-b from-[#7B4296] from-[-45%] via-[#000000] via-50% to-primary-color to-[130%] py-12'>
      <div className='flex flex-col items-center h-full overflow-scroll scrollbar overflow-x-hidden'>
        <p className='text-white text-xl font-bold font-vietnam mb-5'>
          Cadastro
        </p>

        <div className='flex flex-col gap-5 items-center'>
          <div className='flex flex-col gap-2.5'>
            <label
              htmlFor='email'
              className='text-white font-vietnam text-xs font-bold'
            >
              E-mail:
            </label>
            <input
              className='rounded-xl w-72 px-6 py-1.5'
              id='email'
              type='email'
              {...register('email')}
              value={email}
            />
          </div>

          <div className='flex flex-col gap-2.5'>
            <label
              htmlFor='name'
              className='text-white font-vietnam text-xs font-bold'
            >
              Nome:
            </label>
            <input
              className='rounded-xl w-72 px-6 py-1.5'
              id='name'
              type='text'
              {...register('name')}
              value={nome}
            />
          </div>

          <div className='flex flex-col gap-2.5'>
            <label
              htmlFor='password'
              className='text-white font-vietnam text-xs font-bold'
            >
              Senha:
            </label>
            <input
              className='rounded-xl w-72 px-6 py-1.5'
              id='password'
              type='password'
              {...register('password')}
              value={pass}
            />
          </div>

          <div className='flex flex-col gap-2.5'>
            <label
              htmlFor='passwordDouble'
              className='text-white font-vietnam text-xs font-bold'
            >
              Digite novamente a senha:
            </label>
            <input
              className='rounded-xl w-72 px-6 py-1.5'
              id='passwordDouble'
              type='password'
              onChange={(event) => handleInputChange(event, setPassDouble)}
              value={passDouble}
            />
          </div>

          <div className='flex flex-col gap-2.5'>
            <label
              htmlFor='telefone'
              className='text-white font-vietnam text-xs font-bold'
            >
              Telefone:
            </label>
            <input
              className='rounded-xl w-72 px-6 py-1.5'
              id='telefone'
              type='text'
              onChange={(event) => handleInputChange(event, setTelefone)}
              value={telefone}
            />
          </div>

          <div className='flex flex-col gap-2.5'>
            <label
              htmlFor='cpf'
              className='text-white font-vietnam text-xs font-bold'
            >
              CPF:
            </label>
            <input
              className='rounded-xl w-72 px-6 py-1.5'
              id='cpf'
              type='text'
              onChange={(event) => handleInputChange(event, setCpf)}
              value={cpf}
            />
          </div>

          <div className='flex flex-col gap-2.5'>
            <label
              htmlFor='filial'
              className='text-white font-vietnam text-xs font-bold'
            >
              Selecione a filial em que você trabalha:
            </label>
            <select
              id='filial'
              className='bg-gray-50 border w-72 border-gray-300 text-gray-900 text-xs rounded-xl focus:ring-0 focus:outline-none focus:white p-2.5'
              onChange={(event) => handleInputChange(event, setFilial)}
              value={filial}
            >
              <option selected>Escolha uma filial</option>
              {data.map((city) => (
                <option key={city.cidade} value={city.cidade}>
                  {city.cidade}
                </option>
              ))}
            </select>
          </div>

          <div className='flex flex-col gap-2.5'>
            <label
              htmlFor='turma'
              className='text-white font-vietnam text-xs font-bold'
            >
              Selecione agora suas turmas:
            </label>
            <select
              id='turma'
              className='bg-gray-50 border w-72 border-gray-300 text-gray-900 text-xs rounded-xl focus:ring-0 focus:outline-none focus:white p-2.5'
              onChange={(event) => handleInputChange(event, setTurma)}
              value={turma}
            >
              <option selected>Selecione as turmas:</option>
              {data.map((item) => (
                <option value={item.turmas} disabled={item.cidade !== filial}>
                  {item.turmas.join(',')}
                </option>
              ))}
            </select>
          </div>

          <div className='flex flex-col gap-2.5'>
            <label
              htmlFor='dataNascimento'
              className='text-white font-vietnam text-xs font-bold'
            >
              Data de Nascimento:
            </label>
            <input
              className='rounded-xl w-72 px-6 py-1.5'
              id='dataNascimento'
              type='text'
              onChange={(event) => handleInputChange(event, setDataNascimento)}
              value={dataNascimento}
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

            <button
              className='text-white font-bold font-vietnam'
              onClick={() => handleNavigation('/')}
            >
              Fazer Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
