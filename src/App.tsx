import {
  AboutSection,
  Home,
  PlansSection,
} from './pages/LandingPage/components';
import { LandingPage } from './pages/LandingPage/LandingPage';
import Template from './pages/Templates/Template';
import { Routes, Route } from 'react-router-dom';
import { Login } from '@/pages/Login/Login';
import { Register } from './pages/Register/Register';
import { startMock } from './msw';
import { useEffect } from 'react';
import { getUsers } from './hooks/getUsers';

// TODO: Definir uma url padrão no axios
// TODO: Montar um objeto de retorno no msw
// TODO: Criar um hook do react query para pegar os dados da requisição
// TODO: Formatar os inputs (data, cpf, cpnj e número de telefone)

const App = () => {
  useEffect(() => getUsers(), []);

  startMock();

  return (
    <Routes>
      <Route path='/' element={<LandingPage />}>
        <Route index element={<Home />} />
        <Route path='sobre' element={<AboutSection />} />
        <Route path='planos' element={<PlansSection />} />
      </Route>
      <Route path='/acesso' element={<Template />}>
        <Route index element={<Login />} />
        <Route path='registrar' element={<Register />} />
      </Route>
    </Routes>
  );
};

export default App;
