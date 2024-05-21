import { useState } from "react";
import Icon from "../../assets/images/icons8-sobre-24.png";
import Check from "../../assets/images/check.png";
import { UserType } from "../../types/User";
import Modal from "../Modal/Modal";

const User = (props: UserType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <div className="flex gap-x-10 items-center p-16">
        <div>
          <img src={props.profileImg} alt="Foto de Perfil do Usuário" className="rounded-full w-40 overflow-hidden" />
        </div>
        <div className="flex flex-col">
          <p className="font-vietnam text-white text-xl">{props.name}</p>
          <p className="font-vietnam text-white text-sm"><span className="font-bold">RA:</span> {props.ra}</p>
          <p className="font-vietnam text-white text-sm"><span className="font-bold">Turma:</span> {props.turma}</p>
          <p className="font-vietnam text-white text-sm"><span className="font-bold">CNPJ da Empresa:</span> {props.cnpj}</p>
        </div>
      </div>
      <div className="border-b border-white/45 border-solid h-px w-10/12 rounded-full"></div>
      <div className="flex flex-col justify-center items-start w-9/12">
        <div>
          <p className="font-vietnam text-white font-bold my-8">
            <img src={Icon} alt="" />
            SOBRE:
          </p>
        </div>
        <div>
          <p className="font-vietnam text-white text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus quis distinctio odit dicta, quasi, cupiditate quo possimus aliquid sint, necessitatibus iusto officia incidunt reprehenderit ipsum nostrum in omnis eius laboriosam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime neque quae quod quibusdam laboriosam dolores aspernatur quam, sit esse sint, nesciunt excepturi libero officiis consequatur beatae optio, commodi ad iure!</p>
        </div>
      </div>

      <div className="flex gap-x-12 justify-center items-center mt-8 pb-10">
        <div className="flex flex-col items-center">
          <p className="font-vietnam text-white">WS (Max)</p>
          <p className="font-vietnam text-white font-bold text-4xl">45</p>
        </div>

        <div className="flex flex-col items-center">
          <p className="font-vietnam text-white">Progresso</p>
          <p className="font-vietnam text-white font-bold text-4xl">{props.progresso}%</p>
        </div>
      </div>

      <div>
        <button className="flex items-center gap-1 w-25 font-vietnam px-3 py-1 rounded-2xl text-sm bg-white" onClick={() => setIsOpen(!isOpen)}>
          <img width={40} src={Check} alt="" />
          Gerar Relatório de Aprendiz
        </button>
      </div>

      <Modal isOpen={isOpen} setOpen={setIsOpen} />
    </div>
  );
};

export default User;
