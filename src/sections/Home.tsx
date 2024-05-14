import { SetStateAction, useEffect, useState } from "react";
import { Table } from "../components/Table/Table";
import { TableCell } from "../components/Table/TableCell";
import { TableHeader } from "../components/Table/TableHeader";
import { TableRow } from "../components/Table/TableRow";
import { ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react';
import { IconButton } from "../components/Table/IconButton";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db } from '../config/firebase';
import { collection, query, where, getDocs } from "firebase/firestore";

const Home = () => {
  const array = [
    {id: 1, name: 'Lívia', turma: '3', empresa: 'Microsoft', profileImg: 'src\\assets\\images\\young-woman-with-glasses.png'},
    {id: 2, name: 'Paulo', turma: '3', empresa: 'Sony'},
    {id: 3, name: 'Mateus', turma: '1', empresa: 'Claro'},
    {id: 4, name: 'Márcio', turma: '2', empresa: 'Nestlé'},
    {id: 5, name: 'José Paulo', turma: '5', empresa: 'Nestlé'},
    {id: 6, name: 'Eduardo', turma: '3', empresa: 'Nestlé'},
    {id: 7, name: 'Carlos', turma: '4', empresa: 'Carrefour'},
    {id: 8, name: 'Luana', turma: '2', empresa: 'IBM'},
    {id: 9, name: 'Gabriel', turma: '1', empresa: 'Google'},
    {id: 10, name: 'Rafaela', turma: '5', empresa: 'Samsung'}
  ];

  const navigate = useNavigate();

  const handleProfileAccess = (post: { id: number; name: string; turma: string; empresa: string; }) => {
      navigate('/profile', { state: post})
  }

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const maxRowPerPage = 7;
  const filteredArray = array.filter(item => 
    item.id.toString().includes(search.toLowerCase()) ||
    item.turma.toLowerCase().includes(search.toLowerCase()) ||
    item.empresa.toLowerCase().includes(search.toLowerCase()) ||
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredArray.length / maxRowPerPage);


  useEffect(() => {
    fetch('//dummyjson.com/test')
      .then(res => res.json())
      .then(console.log);
  })

  const handleNextPage = () => {
    if(page < totalPages) {
      setPage(page + 1)
    }
   }

   const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleFirstPage = () => {
    setPage(1);
  };

  const handleLastPage = () => {
    setPage(totalPages);
  };

  const handleSearchChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSearch(event.target.value);
    setPage(1); // Reset page to 1 when search query changes
  };


  return (
    <div className="w-full h-screen bg-[#141627] flex flex-col justify-center items-center">
      <div className="bg-[#000000] w-full h-20"></div>
      <div className="m-auto w-8/12">
      <input className="rounded-sm border border-black/10 mb-4"
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search..."
      />

        <Table>
          <thead>
            <tr className="border-b border-white/10">
              <TableHeader style={{ width: 48 }}>
                <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10" />
              </TableHeader>
              <TableHeader>Nome</TableHeader>
              <TableHeader>Turma</TableHeader>
              <TableHeader>Empresa</TableHeader>
            </tr>
          </thead>
          <tbody>
            {filteredArray.slice((page - 1) * maxRowPerPage, page * maxRowPerPage).map((employee) => {
              return (
                <TableRow key={employee.id}>
                  <TableCell>
                    <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10" />
                  </TableCell>
                  <TableCell onClick={() => handleProfileAccess(employee)}>{employee.name}</TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-white">{employee.turma}</span>
                    </div>
                  </TableCell>
                  <TableCell>{employee.empresa}</TableCell>
                </TableRow>
              )
            })}
          </tbody>
          <tfoot>
            <tr>
              <TableCell colSpan={3}>
                  {filteredArray.length}
              </TableCell>
              <TableCell className="text-right" colSpan={3}>
                <div className="inline-flex items-center gap-8">
                  <span>Página {page} de {totalPages}</span>
                </div>
                <div>
                  <IconButton onClick={handleFirstPage} disabled={page === 1}>
                      <ChevronsLeft className="size-4" />
                  </IconButton>
                  <IconButton onClick={handlePrevPage} disabled={page === 1}>
                      <ChevronLeft className="size-4" />
                  </IconButton>
                  <IconButton onClick={handleNextPage} disabled={page === totalPages}>
                    <ChevronRight className="size-4" />
                  </IconButton>
                  <IconButton onClick={handleLastPage} disabled={page === totalPages}>
                    <ChevronsRight className="size-4" />
                  </IconButton>
                </div>
              </TableCell>
            </tr>
          </tfoot>
        </Table>
      </div>
    </div>
  )
}

export default Home
