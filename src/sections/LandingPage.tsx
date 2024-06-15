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
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import sliderImg from '../assets/images/slider-image-1.jpg';
import secondSliderImg from '../assets/images/slider-image-2.jpg';
import '../index.css';


const LandingPage = () => {

  const data = [
    { id: '1', 
      name: 'Ricardo Mendes',
      role: 'Gestor de Recursos Humanos',
      image: sliderImg,
      statement: '"Com o JAFM, a praticidade foi evidente desde o primeiro uso. Podemos através dos relatórios disponibilizados tomar decisões mais informadas e estratégicas. A centralização dos dados também facilita a comunicação entre os departamentos, garantindo que todos estejam na mesma página sobre o progresso e desempenho dos jovens. Um dos maiores benefícios que observamos também é a funcionalidade de acesso dos próprios jovens às suas informações através de um aplicativo mobile, que tem sido uma mudança de jogo. Agora, os aprendizes podem verificar facilmente seu histórico de desenvolvimento, conferir seus dados pessoais e acessar certificados diretamente pelo celular. Esta autonomia não só empodera os jovens, mas também reduz significativamente o tempo que nossa equipe gastava respondendo a essas solicitações."'
    },
    { id: '2', 
      name: 'Fernanda Souza', 
      role: 'Coordenadora de Projetos de Educação', 
      image: secondSliderImg, 
      statement: '"A implementação do JAFM revolucionou nossa maneira de trabalhar. Antes, o acompanhamento dos nossos alunos era um processo fragmentado, com informações espalhadas por várias planilhas e documentos, algo que não só dificultava a gestão diária, mas também tornava desafiador monitorar o progresso individual e coletivo dos aprendizes. Agora, com a centralização dos dados em uma plataforma única, temos uma visão clara e detalhada de cada jovem. Podemos acessar rapidamente o histórico educacional, os relatórios de desempenho e as metas de cada um, tudo em um só lugar."' 
    },
  ]



  const navigate = useNavigate();

  const handlePage = (page: string) => {
    navigate(page)
  }

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
                <a className="nav-link page-scroll text-red text-lg font-vietnam" href="" onClick={() => handlePage("/login")}>Home<span className="sr-only">(current)</span></a>
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
                <div className='flex flex-col gap-4 items-start font-vietnam'>
                  <h1 className="text-2xl font-vietnam">Construindo um futuro brilhante</h1>
                  <h1 className="text-5xl font-vietnam"> JAFM </h1>
                  <h1 className="text-3xl font-vietnam"> Aprender, crescer, prosperar! </h1>
                  <Link to="/login" className="btn-solid-lg font-vietnam">Comece Agora</Link>
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
                <div className="mb-8">
                  <p className='font-bold font-vietnam'>Tem sentido dificuldades ao fazer o gerenciamento dos jovens aprendizes?</p>

                  <p className='font-bold font-vietnam'>Precisa de um lugar para avaliá-los e, dessa forma, centralizar as informações para identificar pontos de melhoria?</p>
                </div>
                  <h2 className='text-primary-color'>Faça o gerenciamento de jovens aprendizes de forma fácil e rápida com o JAFM!</h2>
                  <p>O JAFM oferece um sistema, como um CRM que armazena dados, com a possibilidade de ter visões macro sobre a performance de cada jovem através de gráficos e tabelas, fazendo com que tanto o desenvolvimento de jovens, quanto a gestão pelos professores e coordenadores sejam facilitados e rápidos com alguns cliques e poucos minutos, ao invés de utilizar várias horas ao dia para verificar os dados.</p>
                </div>
                <div className="flex justify-center mt-4">
                  <img className="custom-img" src={login} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className='mx-auto text-center my-4'>
        <p className='text-lg font-vietnam'>Seguem agora alguns depoimentos de nossos clientes:</p>
      </div>
      <div className='w-1/2 mx-auto my-8 shadow-lg'>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 15000,
            disableOnInteraction: false
          }}
          modules={[Pagination, Autoplay, Navigation]} >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className='rounded-md p-4'>
                <img className='w-32 h-24 object-cover rounded-lg' src={item.image} alt="Slider" />
                <p className='text-md font-vietnam font-bold'>{item.name}</p>
                <p className='text-md font-vietnam'>{item.role}</p>
                <p className='text-sm font-vietnam'>{item.statement}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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
