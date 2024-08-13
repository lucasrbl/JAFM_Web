// import { SetStateAction, useEffect, useState } from "react";
// import { Table } from "../../components/Table/Table";
// import { TableCell } from "../../components/Table/TableCell";
// import { TableHeader } from "../../components/Table/TableHeader";
// import { TableRow } from "../../components/Table/TableRow";
// import { ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react';
// import { IconButton } from "../../components/Table/IconButton";
// import { useNavigate } from "react-router-dom";
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { db } from '../../config/firebase';
// import { collection, query, where, getDocs } from "firebase/firestore";
// //import { UserType } from "../../types/User";

// const Home = () => {
//   const [userUid, setUserUid] = useState("");
//   const [documentFound, setDocumentFound] = useState<string | null>(null);
//   const [users, setUsers] = useState<any[]>([]);
//   const [turma, setTurma] = useState<string[]>([]);
//   const [page, setPage] = useState(1);
//   const [search, setSearch] = useState('');

//   const auth = getAuth();
//   const navigate = useNavigate();
//   const maxRowPerPage = 7;

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
      
//       if (user) {
//         setUserUid(user.uid);
//       }
//     });

//     return () => unsubscribe();
//   }, [auth]);

//   useEffect(() => {
//     const fetchManagersTurmas = async () => {
//       try {
//         const q = query(collection(db, 'managers'), where('userUid', '==', userUid));
//         const querySnapshot = await getDocs(q)
//         const turmas = querySnapshot.docs.map(doc => doc.data().turma); 
        
//         const turmasArray = turmas[0].split(',')
//         setTurma(turmasArray);
//       } catch (error) {
//         console.error("Erro ao buscar turmas dos managers:", error);
//       }
//     };
    
//     fetchManagersTurmas();
//   }, [userUid]);
  
//   useEffect(() => {
//     if(turma.length > 0) {
//       checkDocument(turma);
//     }
//   }, [turma]);


// const checkDocument = async (turma: string[]) => {
//   try {
//     const q = query(collection(db, 'users'), where('turma', 'in', turma));
//     const querySnapshot = await getDocs(q);
//       if (!querySnapshot.empty) {
//         const user = querySnapshot.docs.map((doc) => {
//           const id = doc.id;
//           const data = doc.data();
//           return { id, ...data };
//         });
//         setUsers(user);
//         setDocumentFound("Existe"); 

//         } else {
//         setDocumentFound("Não existe");
//       }

//       } catch(error) {
//         console.error("Erro ao verificar documentos na coleção", error);
//       }
//     };


//   const handleProfileAccess = (post: UserType) => {
//     navigate('/profile', { state: post })
//   }


//   const filteredArray = users.filter(item =>
//     item.progresso && item.progresso.toString().toLowerCase().includes(search.toLowerCase()) ||
//     item.ra && item.ra.toLowerCase().includes(search.toLowerCase()) ||
//     item.nome && item.nome.toLowerCase().includes(search.toLowerCase()) ||
//     item.cnpj && item.cnpj.includes(search.toLowerCase()) ||
//     item.turma && item.turma.toLowerCase().includes(search.toLowerCase())
//   );

//   const totalPages = Math.ceil(filteredArray.length / maxRowPerPage);

//   const handleNextPage = () => {
//     if (page < totalPages) {
//       setPage(page + 1)
//     }
//   }

//   const handlePrevPage = () => {
//     if (page > 1) {
//       setPage(page - 1);
//     }
//   };

//   const handleFirstPage = () => {
//     setPage(1);
//   };

//   const handleLastPage = () => {
//     setPage(totalPages);
//   };

//   const handleSearchChange = (event: { target: { value: SetStateAction<string>; }; }) => {
//     const value = event.target.value
//     setSearch(value);
//     setPage(1); // Reset page to 1 when search query changes
//   };

//   return (
//     <div className="w-full h-screen bg-[#141627] flex flex-col justify-center items-center">
//       <div className="bg-[#000000] w-full h-20"></div>
//       <div className="m-auto w-8/12">
//         <input
//           className="rounded-sm border border-black/10 mb-4"
//           type="text"
//           value={search}
//           onChange={handleSearchChange}
//           placeholder="Search..."
//         />

//         <Table>
//           <thead>
//             <tr className="border-b border-white/10">
//               <TableHeader style={{ width: 48 }}>
//                 <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10" />
//               </TableHeader>
//               <TableHeader>Nome</TableHeader>
//               <TableHeader>Turma</TableHeader>
//               <TableHeader>CNPJ</TableHeader>
//               <TableHeader>Progresso</TableHeader>
//             </tr>
//           </thead>
//           <tbody>
//             {documentFound === "Existe" && (
//               filteredArray
//                 .slice((page - 1) * maxRowPerPage, page * maxRowPerPage)
//                 .map((employee) => (
//                   <TableRow key={employee.ra}>
//                     <TableCell>
//                       <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10" />
//                     </TableCell>
//                     <TableCell onClick={() => handleProfileAccess(employee)}>{employee.nome}</TableCell>
//                     <TableCell>
//                         <span className="font-semibold text-white">{employee.turma}</span>
//                     </TableCell>
//                     <TableCell>{employee.cnpj}</TableCell>
//                     <TableCell>{employee.progresso}</TableCell>

//                   </TableRow>
//                 ))
//             )}
//           </tbody>
//           <tfoot>
//             <tr>
//               <TableCell colSpan={3}>
//                 {filteredArray.length}
//               </TableCell>
//               <TableCell className="text-right" colSpan={3}>
//                 <div className="inline-flex items-center gap-8">
//                   <span>Página {page} de {totalPages}</span>
//                 </div>
//                 <div>
//                   <IconButton onClick={handleFirstPage} disabled={page === 1}>
//                     <ChevronsLeft className="size-4" />
//                   </IconButton>
//                   <IconButton onClick={handlePrevPage} disabled={page === 1}>
//                     <ChevronLeft className="size-4" />
//                   </IconButton>
//                   <IconButton onClick={handleNextPage} disabled={page === totalPages}>
//                     <ChevronRight className="size-4" />
//                   </IconButton>
//                   <IconButton onClick={handleLastPage} disabled={page === totalPages}>
//                     <ChevronsRight className="size-4" />
//                   </IconButton>
//                 </div>
//               </TableCell>
//             </tr>
//           </tfoot>
//         </Table>
//       </div>
//     </div>
//   )
// }

// export default Home;

