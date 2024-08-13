import { Header, HeroSection, ContactForm, Footer } from './components/index';

export const LandingPage = () => {
  return (
    <section className='bg-gradient-to-b from-white from-60%  via-primary-color via-100%'>
      <Header
        links={[
          {
            key: 'Sobre',
            children: 'Sobre',
            to: '/sobre',
            variant: 'secondary',
          },
          {
            key: 'Planos',
            children: 'Planos',
            to: '/planos',
            variant: 'secondary',
          },
          {
            key: 'Login',
            children: 'Clique e confira!',
            to: '/login',
            variant: 'primary',
          },
        ]}
      />
      <HeroSection />
      <ContactForm />
      <hr className='h-px bg-white opacity-30 mb-5' />
      <Footer />
    </section>
  );
};
