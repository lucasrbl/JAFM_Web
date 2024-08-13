import { useLocation } from "react-router-dom"
import User from "../../components/User/User"

const Profile = () => { 
  
  const { state } = useLocation();

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-[#141627]">
       <User profileImg={state.profileImg} 
             id={state.id}
             ra={state.ra} 
             name={state.nome} 
             cnpj={state.cnpj} 
             turma={state.turma}
             dataInicio={state.dataInicio}
             dataNascimento={state.dataNascimento}
             email={state.email}
             cpf={state.cpf}
             progresso={state.progresso}
             telefone={state.telefone}
             />
    </div>
  )
}

export default Profile