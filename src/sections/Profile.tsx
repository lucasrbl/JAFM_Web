import { useLocation } from "react-router-dom"
import User from "../components/User/User"

const Profile = () => {    
  const { state } = useLocation();

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-[#141627]">
       <User profileImg={state.profileImg} 
             id={state.id} 
             name={state.name} 
             empresa={state.empresa} 
             turma={state.turma}/>
    </div>
  )
}

export default Profile