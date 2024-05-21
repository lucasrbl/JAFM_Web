import { Bar } from "react-chartjs-2";
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale,  
  BarElement,
  Title,
  Tooltip,
  Legend  
} from "chart.js"
import { data } from "./Data";
import { onAuthStateChanged } from "firebase/auth";
import { query, collection, where, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../config/firebase";
import { useNavigate } from "react-router-dom";



ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export const BarChart = () => {
  const [userUid, setUserUid] = useState("");
  const [users, setUsers] = useState<any[]>([]);
  const [turma, setTurma] = useState<string[]>([]);

  {/*const navigate = useNavigate();*/}



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      
      if (user) {
        setUserUid(user.uid);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  useEffect(() => {
    const fetchManagersTurmas = async () => {
      try {
        const q = query(collection(db, 'managers'), where('userUid', '==', userUid));
        const querySnapshot = await getDocs(q)
        const turmas = querySnapshot.docs.map(doc => doc.data().turma); 
        
        const turmasArray = turmas[0].split(',')
        setTurma(turmasArray);
      } catch (error) {
        console.error("Erro ao buscar turmas dos managers:", error);
      }
    };
    
    fetchManagersTurmas();
  }, [userUid]);
  
  useEffect(() => {
    if(turma.length > 0) {
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



    const filteredArray = users.filter(item => typeof item.progresso
  );

  console.log(filteredArray)



  const options = {};
  return <Bar className="mx-12 py-10" options={options} data={data} />;
};