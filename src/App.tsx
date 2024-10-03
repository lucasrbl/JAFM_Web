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

const App = () => {
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
