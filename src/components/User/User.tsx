import Icon from "../../assets/images/icons8-sobre-24.png"

interface UserProps {
    id: string;
    name: string;
    empresa: string;
    turma: string;
    profileImg: string;
}

const User = (props: UserProps) => {
  return (
<div className="flex flex-col items-center justify-center">
    <div className="flex gap-x-10 items-center p-16">
        <div>
            <img src={props.profileImg} alt="Foto de Perfil do Usuário" className="rounded-full w-44"/>
        </div>
        <div className="flex flex-col">
            <p className="font-vietnam text-white text-xl">{props.name}</p>
            <p className="font-vietnam text-white text-sm"><span className="font-bold">RA:</span> {props.id}</p>
            <p className="font-vietnam text-white text-sm"><span className="font-bold">Turma:</span> {props.turma}</p>
            <p className="font-vietnam text-white text-sm"><span className="font-bold">Empresa:</span> {props.empresa}</p>
        </div>
    </div>
    <div className="border-b border-white/45 border-solid h-px w-10/12 rounded-full"></div>
        <div>
            <p className="font-vietnam text-white font-bold my-8">
               <img src={Icon} alt=""/> 
               SOBRE:
            </p>
        </div>
        <div>
            <p className="font-vietnam text-white text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus quis distinctio odit dicta, quasi, cupiditate quo possimus aliquid sint, necessitatibus iusto officia incidunt reprehenderit ipsum nostrum in omnis eius laboriosam.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime neque quae quod quibusdam laboriosam dolores aspernatur quam, sit esse sint, nesciunt excepturi libero officiis consequatur beatae optio, commodi ad iure!</p>
        </div>

        <div className="flex gap-x-12 justify-center items-center mt-8">
            <div className="flex flex-col items-center">
            <p className="font-vietnam text-white">WS (Max)</p>
            <p className="font-vietnam text-white font-bold text-4xl">45</p> 
            </div>

            <div className="flex flex-col items-center">
                <p className="font-vietnam text-white">Progresso</p>
                <p className="font-vietnam text-white font-bold text-4xl">38%</p>
            </div>

            <div className="flex flex-col items-center">
                <p className="font-vietnam text-white">Progresso</p>
                <p className="font-vietnam text-white font-bold text-4xl">38%</p>
            </div>
        </div>
</div>
  )
}

export default User