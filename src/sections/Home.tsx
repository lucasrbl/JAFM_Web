import { Table } from "../components/Table/Table";
import { TableCell } from "../components/Table/TableCell";
import { TableHeader } from "../components/Table/TableHeader";
import { TableRow } from "../components/Table/TableRow";



const Home = () => {
  const array = [
    {id: 1, name: 'José', turma: '3', empresa: 'Nestlé'},
    {id: 2, name: 'José', turma: '3', empresa: 'Nestlé'},
    {id: 3, name: 'José', turma: '3', empresa: 'Nestlé'}
  ]


  // function setCurrentPage(page: number) {
  //   const url = new URL(window.location.toString());
  //   url.searchParams.set('page', String(page));
  //   window.history.pushState({}, '', url);
  //   setPage(page);
  // }

  // function onSearchInputChange(ev: ChangeEvent<HTMLInputElement>) {
  //   setCurrentSearch(ev.target.value);
  //   setCurrentPage(1);
  // }

  // function goToNextPage() {
  //   setCurrentPage(page + 1);
  // }

  // function goToPreviousPage() {
  //   setCurrentPage(page - 1);
  // }

  // function goToFirstPage() {
  //   setCurrentPage(1);
  // }

  // function goToLastPage() {
  //   setCurrentPage(totalPages);
  // }


  return (
    <div className="w-full h-screen bg-[#141627] flex flex-col justify-center items-center">
      <div className="bg-[#000000] w-full h-20"></div>
      <div className="m-auto">
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
                  Teste
              </TableCell>
              <TableCell className="text-right" colSpan={3}>
                <div className="inline-flex items-center gap-8">
                  <span>Teste</span>
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