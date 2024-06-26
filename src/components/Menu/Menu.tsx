import React, { useState, SetStateAction } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../../config/firebase';
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { data } from "../../types/Turmas";


const Menu = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passDouble, setPassDouble] = useState("");
  const [errorLogin, setErrorLogin] = useState(false);
  const [telefone, setTelefone] = useState("");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [filial, setFilial] = useState("");
  const [turma, setTurma] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");

  const navigate = useNavigate();

  const handlePage = (page: string) => {
    navigate(page);
  };


  const handleVarChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>, setState: React.Dispatch<SetStateAction<string>>) => {
    const value = event.target.value;
    setState(value);
  };

  const login = () => {

    signInWithEmailAndPassword(auth, email, pass)
      .then((_userCredential) => {
        if(email.includes('@jafm.com')) {
          navigate("/home");
        }

        else {
          setErrorLogin(true);
        }
        // Signed in
      })
      .catch((error) => {
        setErrorLogin(true);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Erro ao fazer login:", errorCode, errorMessage);
      });
  };

  const handleSignUp = async () => {
    try {
      // Crie o usuário no Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
      const user = userCredential.user;

      // Salve outras informações do usuário na coleção "users"
      await setDoc(doc(db, "managers", user.uid), {
        email,
        telefone,
        nome,
        cpf,
        filial,
        turma,
        userUid: user.uid,
        dataNascimento
      });

      console.log("Usuário cadastrado com sucesso:", user);
      navigate("/home");
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
    }
  };

  return (
    <>
      {location.pathname === '/login' && (
        <div className="flex justify-center items-center ml-auto w-1/3 bg-gradient-to-b from-[#7B4296] from-[-45%] via-[#000000] via-50% to-primary-color to-[130%] overflow-y-scroll">
          <div className="flex flex-col items-center">
            <p className="text-white text-xl font-bold font-vietnam mb-5">Login</p>

            <div className="flex flex-col gap-5 items-center">
              <div className="flex flex-col gap-2.5">
                <label htmlFor="email" className="text-white font-vietnam text-xs font-bold">E-mail</label>
                <input className="rounded-xl w-72 px-6 py-1.5" id="email" type="email" onChange={(event) => handleVarChange(event, setEmail)} value={email} />
              </div>

              <div className="flex flex-col gap-2.5">
                <label htmlFor="password" className="text-white font-vietnam text-xs font-bold">Senha</label>
                <input className="rounded-xl w-72 px-6 py-1.5" id="password" type="password" onChange={(event) => handleVarChange(event, setPass)} value={pass} />
              </div>

              <div className="flex flex-col items-center gap-6">
                {/*<button className="text-white underline font-bold" onClick={() => navigate("/forgot-my-password")}>
                  Esqueci minha senha
                  </button>*/}

                <button className="rounded-md bg-gradient-to-r from-primary-color to-secondary-red w-40 h-8 px-12 text-white font-vietnam" onClick={login}>
                  Entrar
                </button>

                {errorLogin == true && (
                  <div className="flex flex-col items-center text-red-500">
                    <p>Usuário ou senha inválidos, por favor, tente novamente!</p>
                  </div>
                )}

                <button className="text-white font-bold" onClick={() => handlePage("/register")}>
                  Quero me cadastrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {location.pathname === '/register' && (
        <div className="flex h-full justify-center items-center ml-auto w-1/3 bg-gradient-to-b from-[#7B4296] from-[-45%] via-[#000000] via-50% to-primary-color to-[130%] py-12">
          <div className="flex flex-col items-center h-full overflow-scroll scrollbar overflow-x-hidden">
            <p className="text-white text-xl font-bold font-vietnam mb-5">Cadastro</p>

            <div className="flex flex-col gap-5 items-center">
              <div className="flex flex-col gap-2.5">
                <label htmlFor="email" className="text-white font-vietnam text-xs font-bold">E-mail:</label>
                <input className="rounded-xl w-72 px-6 py-1.5" id="email" type="email" onChange={(event) => handleVarChange(event, setEmail)} value={email} />
              </div>

              <div className="flex flex-col gap-2.5">
                <label htmlFor="name" className="text-white font-vietnam text-xs font-bold">Nome:</label>
                <input className="rounded-xl w-72 px-6 py-1.5" id="name" type="text" onChange={(event) => handleVarChange(event, setNome)} value={nome} />
              </div>

              <div className="flex flex-col gap-2.5">
                <label htmlFor="password" className="text-white font-vietnam text-xs font-bold">Senha:</label>
                <input className="rounded-xl w-72 px-6 py-1.5" id="password" type="password" onChange={(event) => handleVarChange(event, setPass)} value={pass} />
              </div>

              <div className="flex flex-col gap-2.5">
                <label htmlFor="passwordDouble" className="text-white font-vietnam text-xs font-bold">Digite novamente a senha:</label>
                <input className="rounded-xl w-72 px-6 py-1.5" id="passwordDouble" type="password" onChange={(event) => handleVarChange(event, setPassDouble)} value={passDouble} />
              </div>

              <div className="flex flex-col gap-2.5">
                <label htmlFor="telefone" className="text-white font-vietnam text-xs font-bold">Telefone:</label>
                <input className="rounded-xl w-72 px-6 py-1.5" id="telefone" type="text" onChange={(event) => handleVarChange(event, setTelefone)} value={telefone} />
              </div>

              <div className="flex flex-col gap-2.5">
                <label htmlFor="cpf" className="text-white font-vietnam text-xs font-bold">CPF:</label>
                <input className="rounded-xl w-72 px-6 py-1.5" id="cpf" type="text" onChange={(event) => handleVarChange(event, setCpf)} value={cpf} />
              </div>

              <div className="flex flex-col gap-2.5">
                <label htmlFor="filial" className="text-white font-vietnam text-xs font-bold">Selecione a filial em que você trabalha:</label>
                <select id="filial" className="bg-gray-50 border w-72 border-gray-300 text-gray-900 text-xs rounded-xl focus:ring-0 focus:outline-none focus:white p-2.5" onChange={(event) => handleVarChange(event, setFilial)} value={filial}>
                  <option selected>Escolha uma filial</option>
                  {data.map((city) => (
                    <option key={city.cidade} value={city.cidade}>{city.cidade}</option>
                  ))}
                </select>
              </div>

              
              <div className="flex flex-col gap-2.5">
              <label htmlFor="turma" className="text-white font-vietnam text-xs font-bold">Selecione agora suas turmas:</label>
                <select id="turma" className="bg-gray-50 border w-72 border-gray-300 text-gray-900 text-xs rounded-xl focus:ring-0 focus:outline-none focus:white p-2.5" onChange={(event) => handleVarChange(event, setTurma)} value={turma}>
                  <option selected>Selecione as turmas:</option>
                  {data.map((item) => (
                    <option value={item.turmas} disabled={item.cidade !== filial}>{item.turmas.join(',')}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2.5">
                <label htmlFor="dataNascimento" className="text-white font-vietnam text-xs font-bold">Data de Nascimento:</label>
                <input className="rounded-xl w-72 px-6 py-1.5" id="dataNascimento" type="text" onChange={(event) => handleVarChange(event, setDataNascimento)} value={dataNascimento} />
              </div>

              {/*<div className="flex flex-col gap-2.5">
                <label className="text-white font-vietnam text-xs font-bold" htmlFor="profileImg">Adicione uma imagem para seu perfil:</label>
                <input type="file" onChange={handleFileChange} className="rounded-xl w-72  py-1.5 text-white file:mr-5 file:rounded-md file:py-1 file:px-3 file:text-xs file:font-medium file:text-stone-700 hover:file:cursor-pointer hover:file:bg-gradient-to-r from-primary-color to-secondary-red" />
                </div>*/}


              <div className="flex flex-col items-center gap-6 px-2">
                <button className="text-white font-bold font-vietnam">
                  Confira nossos termos de propriedade intelectual
                </button>

                <button className="rounded-md bg-gradient-to-r from-primary-color to-secondary-red w-40 h-8 px-10 text-white font-vietnam" onClick={handleSignUp}>
                  Cadastrar
                </button>

                <button className="text-white font-bold font-vietnam" onClick={() => handlePage("/")}>
                  Fazer Login
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
