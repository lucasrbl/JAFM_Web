import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage/LandingPage';
import Template from './pages/Templates/Template';


const App = () => {
  return (
    <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<Template/>} />
    </Routes>
  );
};

export default App;