import { useEffect, useState } from "react";
import Icon from "../../assets/images/icons8-sobre-24.png";
import Check from "../../assets/images/check.png";
import { UserType } from "../../types/UserTypes";
import Modal from "../Modal/Modal";
import { onAuthStateChanged } from "firebase/auth";
import { query, collection, where, getDocs } from "firebase/firestore";
import { auth, db } from "../../config/firebase";


const User = (props: UserType) => {
  const [userUid, setUserUid] = useState("");
  const [users, setUsers] = useState<any[]>([]);
  const [otherUsers, setOtherUsers] = useState<any[]>([]);
  const [turma, setTurma] = useState<string[]>([]);
  const [otherClasses, setOtherClasses] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);


  useEffect(() => {

    const fetchOtherManagersClasses = async () => {
      try {
        const q = query(collection(db, 'managers'), where('userUid', '!=', userUid));
        const querySnapshot = await getDocs(q);
        const allClasses: string[] = [];
    
        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            const classes = data.turma

            if (classes) {
              const classArray = classes.split(',');

              classArray.forEach((t:string) => {
                if (!allClasses.includes(t) && !turma.includes(t)) {
                  allClasses.push(t);
                }
              });
            }
          });

          setOtherClasses(allClasses);
        }

        if (allClasses.length > 0) {
          const usersQuery = query(collection(db, 'users'), where('turma', 'in', allClasses));
          const snapshot = await getDocs(usersQuery);

          if (!snapshot.empty) {
            const users = snapshot.docs.map((doc) => {
              const id = doc.id;
              const data = doc.data();
              return { id, ...data };
            });
            setOtherUsers(users);
          }
        }
      } catch(error) {
        console.error("Erro ao buscar turmas de outros professores:", error);
      }
    };                
        if (userUid) {
          fetchOtherManagersClasses();
        }
      }, [userUid]);  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserUid(user.uid);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchManagersTurmas = async () => {
      try {
        const q = query(collection(db, 'managers'), where('userUid', '==', userUid));
        const querySnapshot = await getDocs(q);
        const turmas = querySnapshot.docs.map(doc => doc.data().turma);
        
        if (turmas.length > 0) {
          const turmasArray = turmas[0].split(',');
          setTurma(turmasArray);
        }
      } catch (error) {
        console.error("Erro ao buscar turmas dos managers:", error);
      }
    };
    
    if (userUid) {
      fetchManagersTurmas();
    }
  }, [userUid]);
  
  useEffect(() => {
    if (turma.length > 0) {
      checkDocument(turma);
      
    }
  }, [turma]);

  const checkDocument = async (turma: string[]) => {
    try {
      const q = query(collection(db, 'users'), where('turma', 'in', turma));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const user = querySnapshot.docs.map((doc) => {
          const id = doc.id;
          const data = doc.data();
          return { id, ...data };
        });
        setUsers(user);
      }
    } catch(error) {
      console.error("Erro ao verificar documentos na coleção", error);
    }
  };
  
  const getAverageProgress = (students: UserType[]): number => {
    if (students.length === 0) return 0;
    const totalProgress = students.reduce((acc, student) => acc + Number(student.progresso), 0);
    return totalProgress / students.length;
  };

  const countStudents = (students: UserType[]): { count: number, average: number, arr: number[] } => {
    const count = students.length;
    const average = getAverageProgress(students)

    const arr = students.map(student => Number(student.progresso));
    return { count, average, arr};
  };  

  const res = countStudents(users)
  const otherRes = countStudents(otherUsers)

  console.log("Turmas do professor atual", turma + "\nOutras turmas: ", otherClasses)
  console.log("Média do progresso de usuários", res.average + "\nMédia do progresso de usuários de outras turmas", otherRes.average)
  console.log("Progressos de usuários", res.arr + "\nProgressos de usuários de outras turmas", otherRes.arr) 


  return (
    <div className="flex flex-col items-center justify-center p-5">
      <div className="flex gap-x-10 items-center p-16">
        <div>
          <img src={props.profileImg} alt={props.profileImg ? 'Foto de perfil' : 'Usuário sem foto de perfil disponível'} className="rounded-full w-40 overflow-hidden" />
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
          <p className="font-vietnam text-white text-sm">
            Usuário cadastrado em {props.dataInicio}, tem como telefone de contato o número {props.telefone}, 
            frequenta também a unidade de {props.turma == 'TIN5' || 'TIN6' ? 'Campinas' : props.turma == 'TIN1' || 'TIN2' ? 'Sorocaba' : 'São Paulo'}, 
            nascido(a) em {props.dataNascimento}. Seu progresso é avaliado atualmente em:
           </p>
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

      <div className="flex flex-col items-center gap-3">
          <p className="font-vietnam text-white text-sm">
            Com isso, considera-se que o jovem {props.name} tem 
            {
             Number(props.progresso) == 50 ? 'progresso razoável, já que possui metade da pontuação possível de se atingir'
             : Number(props.progresso) >= 80 ? 'ótimo progresso, possuindo grande destaque entre os jovens da filial em questão, com um desenvolvimento fantástico' 
             : Number(props.progresso) > 65 && Number(props.progresso) < 80 ? ' bom progresso com pontuação suficiente para estar com seu desenvolvimento confortável' 
             : Number(props.progresso) <= 45 ? 'progresso ruim, converse com o jovem em questão para debater pontos de melhoria identificados': 'Não há dados' 
               }
           </p>
           <p className="font-vietnam text-white text-sm">Clique abaixo para ter uma visualização gráfica dos dados do jovem aprendiz</p>
        </div>

      <div>
        <button className="flex items-center gap-1 w-55 font-vietnam px-3 py-1 rounded-2xl text-sm bg-white" onClick={() => setIsOpen(!isOpen)}>
          <img width={40} src={Check} alt="" />
          Gerar Relatório de Aprendiz
        </button>
      </div>

      <Modal isOpen={isOpen} setOpen={setIsOpen} chartData={{
        barProgress: [Number(props.progresso), res.average],
        otherBarProgress: [Number(props.progresso), otherRes.average],
        barNames: [props.name, 'Média do Progresso da turma'],
        otherBarNames: [props.name, 'Média do progresso de outras turmas']
      }} />
    </div>
  );
};

export default User;
