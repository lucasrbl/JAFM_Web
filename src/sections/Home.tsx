import { SetStateAction, useState } from "react";
import { Table } from "../components/Table/Table";
import { TableCell } from "../components/Table/TableCell";
import { TableHeader } from "../components/Table/TableHeader";
import { TableRow } from "../components/Table/TableRow";
import { ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react';
import { IconButton } from "../components/Table/IconButton";


const Home = () => {
  const array = [
    {id: 1, name: 'José', turma: '3', empresa: 'Nestlé'},
    {id: 2, name: 'José', turma: '3', empresa: 'Nestlé'},
    {id: 3, name: 'José', turma: '3', empresa: 'Nestlé'},
    {id: 4, name: 'José', turma: '3', empresa: 'Nestlé'},
    {id: 5, name: 'José', turma: '3', empresa: 'Nestlé'},
    {id: 6, name: 'José', turma: '3', empresa: 'Nestlé'},
    {id: 7, name: 'José', turma: '3', empresa: 'Nestlé'},
    {id: 8, name: 'José', turma: '3', empresa: 'Nestlé'},
    {id: 9, name: 'José', turma: '3', empresa: 'Nestlé'},
    {id: 10, name: 'José', turma: '3', empresa: 'Nestlé'},
    {id: 11, name: 'José', turma: '3', empresa: 'Nestlé'},
    {id: 12, name: 'José', turma: '3', empresa: 'Nestlé'}
  ]

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const pageSize = 5;
  const filteredObj = array.filter(item => item.name.toLowerCase().includes(search))

  const totalPages = Math.ceil(filteredObj.length / pageSize);


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
      <div className="m-auto">
      <input
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
            {array.map((employee) => {
              return (
                <TableRow key={employee.name}>
                  <TableCell>
                    <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10" />
                  </TableCell>
                  <TableCell>{employee.name}</TableCell>
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
                  {array.length}
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