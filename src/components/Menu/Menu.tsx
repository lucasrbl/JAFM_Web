import React, { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../../config/firebase'
import { useNavigate, useLocation } from "react-router-dom"
import { doc, setDoc } from "firebase/firestore";

const Menu = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passDouble, setPassDouble] = useState("");
  // const [errorLogin, setErrorLogin] = useState(false);
  const [telefone, setTelefone] = useState("");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [ra, setRA] = useState("");
  const [cnpj, setCPNJ] = useState("");
  const [progresso, setProgresso] = useState(0);
  const [empregado, setEmpregado] = useState(true);
  const [turma, setTurma] = useState("");
  const [dataInicio, setDataInicio] = useState("");
  const [userID, setUserUid] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handlePage = (page: string) => {
    navigate(page)
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPass(event.target.value);
  };

  const handlePassDoubleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassDouble(event.target.value);
  };

  const handleTelefoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTelefone(event.target.value);
  };

  const handleNomeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value);
  };

  const handleCPFChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCpf(event.target.value);
  };

  const handleRAChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRA(event.target.value);
  };

  const handleCNPJChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCPNJ(event.target.value);
  };

  const handleProgressoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProgresso(parseInt(event.target.value));
  };

  const handleEmpregadoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmpregado(event.target.checked);
  };

  const handleTurmaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTurma(event.target.value);
  };

  const handleDataInicioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDataInicio(event.target.value);
  };

  // const handleUserIDChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setUserUid(event.target.value);
  // };

  const handleDataNascimentoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDataNascimento(event.target.value);
  };

  const login = () => {
    console.log("Email:", email);
    console.log("Senha:", pass);

    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/home");
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
      setUserUid(user.uid);
      // Salve outras informações do usuário na coleção "users"
      await setDoc(doc(db, "users", user.uid), {
        email,
        telefone,
        nome,
        cpf,
        ra,
        cnpj,
        progresso,
        empregado,
        turma,
        dataInicio,
        userID,
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
    {location.pathname === '/' && (

    <div className="flex justify-center items-center ml-auto w-1/3 bg-gradient-to-b from-[#7B4296] from-[-45%] via-[#000000] via-50% to-primary-color to-[130%]">
        <div className="flex flex-col items-center">
            <p className="text-white text-xl font-bold font-vietnam mb-5">Login</p>

            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2.5">
                    <label htmlFor="email" className="text-white font-vietnam text-xs font-bold">E-mail</label>
                    <input className="rounded-xl w-72 px-6 py-1.5" id="email" type="email" onChange={handleEmailChange} value={email}/>
                </div>

                <div className="flex flex-col gap-2.5">
                    <label htmlFor="password" className="text-white font-vietnam text-xs font-bold">Senha</label>
                    <input className="rounded-xl w-72 px-6 py-1.5" id="password" type="password" onChange={handlePassChange} value={pass} />
                </div>

                <div className="flex flex-col items-center gap-6">
                    <button className="text-white underline font-bold">
                        Esqueci minha senha
                    </button>

                    <button className="rounded-md bg-gradient-to-r from-primary-color to-secondary-red w-40 h-8 px-12 text-white font-vietnam" onClick={login}>
                        Entrar
                    </button>

                    <button className="text-white font-bold" onClick={() => handlePage("/register")}>
                        Quero me cadastrar
                    </button>
                </div>
            </div>
        </div>
    </div>
    )}

{location.pathname === '/register' && (

<div className="flex justify-center items-center ml-auto w-1/3 bg-gradient-to-b from-[#7B4296] from-[-45%] via-[#000000] via-50% to-primary-color to-[130%]">
    <div className="flex flex-col items-center">
        <p className="text-white text-xl font-bold font-vietnam mb-5">Cadastro</p>

        <div className="flex flex-col gap-5 items-center">
            <div className="flex flex-col gap-2.5">
                <label htmlFor="email" className="text-white font-vietnam text-xs font-bold">E-mail</label>
                <input className="rounded-xl w-72 px-6 py-1.5" id="email" type="email" onChange={handleEmailChange} value={email}/>
            </div>

            <div className="flex flex-col gap-2.5">
                <label htmlFor="name" className="text-white font-vietnam text-xs font-bold">Nome</label>
                <input className="rounded-xl w-72 px-6 py-1.5" id="name" type="text" onChange={handleNomeChange} value={nome}/>
            </div>

            <div className="flex flex-col gap-2.5">
                <label htmlFor="password" className="text-white font-vietnam text-xs font-bold">Senha</label>
                <input className="rounded-xl w-72 px-6 py-1.5" id="password" type="password" onChange={handlePassChange} value={pass}/>
            </div>

            <div className="flex flex-col gap-2.5">
                <label htmlFor="passwordDouble" className="text-white font-vietnam text-xs font-bold">Digite novamente a senha</label>
                <input className="rounded-xl w-72 px-6 py-1.5" id="passwordDouble" type="password" onChange={handlePassDoubleChange} value={passDouble}/>
            </div>

            <div className="flex flex-col gap-2.5">
                <label htmlFor="telefone" className="text-white font-vietnam text-xs font-bold">Telefone</label>
                <input className="rounded-xl w-72 px-6 py-1.5" id="telefone" type="text" onChange={handleTelefoneChange} value={telefone}/>
            </div>

            <div className="flex flex-col gap-2.5">
                <label htmlFor="cpf" className="text-white font-vietnam text-xs font-bold">CPF</label>
                <input className="rounded-xl w-72 px-6 py-1.5" id="cpf" type="text" onChange={handleCPFChange} value={cpf}/>
            </div>

            <div className="flex flex-col gap-2.5">
                <label htmlFor="RA" className="text-white font-vietnam text-xs font-bold">RA</label>
                <input className="rounded-xl w-72 px-6 py-1.5" id="RA" type="text" onChange={handleRAChange} value={ra}/>
            </div>

            <div className="flex flex-col gap-2.5">
                <label htmlFor="CNPJ" className="text-white font-vietnam text-xs font-bold">CNPJ</label>
                <input className="rounded-xl w-72 px-6 py-1.5" id="CNPJ" type="text" onChange={handleCNPJChange} value={cnpj}/>
            </div>

            <div className="flex flex-col gap-2.5">
                <label htmlFor="empregado" className="text-white font-vietnam text-xs font-bold">Empregado?</label>
                <input className="rounded-xl w-72 px-6 py-1.5" id="empregado" type="bool" onChange={handleEmpregadoChange}/>
            </div>

            <div className="flex flex-col gap-2.5">
                <label htmlFor="progresso" className="text-white font-vietnam text-xs font-bold">Progresso (digite um número de 0 a 100)</label>
                <input className="rounded-xl w-72 px-6 py-1.5" id="progresso" type="number" onChange={handleProgressoChange} value={progresso}/>
            </div>

            <div className="flex flex-col gap-2.5">
                <label htmlFor="turma" className="text-white font-vietnam text-xs font-bold">Turma</label>
                <input className="rounded-xl w-72 px-6 py-1.5" id="turma" type="text" onChange={handleTurmaChange} value={turma}/>
            </div>

            <div className="flex flex-col gap-2.5">
                <label htmlFor="dataInicio" className="text-white font-vietnam text-xs font-bold">Data de Inicio</label>
                <input className="rounded-xl w-72 px-6 py-1.5" id="dataInicio" type="text" onChange={handleDataInicioChange} value={dataInicio}/>
            </div>

            <div className="flex flex-col gap-2.5">
                <label htmlFor="dataNascimento" className="text-white font-vietnam text-xs font-bold">Data Nascimento</label>
                <input className="rounded-xl w-72 px-6 py-1.5" id="dataNascimento" type="text" onChange={handleDataNascimentoChange} value={dataNascimento}/>
            </div>

            <div className="flex flex-col items-center gap-6">
                <button className="text-white font-bold">
                    Confira nossos termos de propriedade intelectual
                </button>

                <button className="rounded-md bg-gradient-to-r from-primary-color to-secondary-red w-40 h-8 px-12 text-white font-vietnam" onClick={handleSignUp}>
                    Cadastrar
                </button>

                <button className="text-white font-bold" onClick={() => handlePage("/")}>
                    Fazer Login
                </button>
            </div>
        </div>
    </div>
</div>
)}
    </>
  )
}

export default Menu
