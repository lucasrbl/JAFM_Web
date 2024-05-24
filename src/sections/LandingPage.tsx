import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/images/JAFM_LOGO.png'
import youngWoman from '../assets/images/home-image.png';
import login from '../assets/images/LOGIN.png';
import '../styling/bootstrap.css';
import '../styling/fontawesome-all.css';
import '../styling/magnific-popup.css';
import '../styling/styles.css';
import '../styling/swiper.css'
import ContactForm from '../components/Form/Form';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top navbar-light">
        <div className="container">
          <a className="navbar-brand logo-image w-3/6" href="/">
            <img src={logo} alt="alternative" />
          </a>
          <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas" onClick={() => navigate("/login")}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link page-scroll text-red" href="/login">Home<span className="sr-only">(current)</span></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header id="header" className="header overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="">
              <div className="text-container">
                <div className='flex flex-col gap-4 items-start'>
                  <h1 className="text-2xl">Construindo um futuro brilhante</h1>
                  <h1 className="text-5xl"> JAFM </h1>
                  <h1 className="text-3xl"> Aprender, crescer, prosperar! </h1>
                  <Link to="/login" className="btn-solid-lg">Comece Agora</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="image-container">
                <img className="img-container home-img" src={youngWoman} alt="alternative" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="w-full bg-[#f9f9f9] pt-4 mt-10">
        <div className="container mx-auto">
          <div className="row flex justify-center items-center">
            <div className="col-lg-12">
              <div className="text-container">
                <div className="text-center">
                  <div>JAFM</div>
                  <h2>Faça o gerenciamento de jovens aprendizes de forma fácil e rápida!</h2>
                  <p>O JAFM oferece um sistema, como um CRM que armazena dados, com a possibilidade de ter visões macro sobre a performance de cada jovem através de gráficos e tabelas, fazendo com que tanto o desenvolvimento de jovens, quanto a gestão pelos professores e coordenadores sejam facilitados!</p>
                </div>
                <div className="flex justify-center mt-4">
                  <img className="custom-img" src={login} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="container">
          <ContactForm />

          
        </div>
      </div>
    </>
  )
}

export default LandingPage;
