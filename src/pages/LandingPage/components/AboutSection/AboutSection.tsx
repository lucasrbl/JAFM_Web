export const AboutSection = () => {
  return (
    <section>
      <article className='mx-10 flex items-center'>
        <div>
          <p>Veja um pouco mais em nosso vídeo:</p>
          <iframe
            width='350'
            height='350'
            src='https://www.youtube.com/embed/h4lOTvvPh3I'
            title='Jafm_UP033LTIN3_6º semestre'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>
        </div>
        <div className='flex flex-col gap-5'>
          <div className='flex justify-center'>
            <h1 className='font-bold text-primary-color text-2xl'>Sobre nós</h1>
          </div>

          <div className='text-pretty w-10/12 m-auto'>
            <p className='text-[#3b3939] indent-5'>
              O JAFM nasceu de uma amizade entre 3 alunos do curso de Engenharia
              da Computação que tinham como objetivo construir um projeto para
              aprimorar habilidades técnicas e interpessoais e, tirar do papel
              ideias que tivemos no período que estivemos em contato com o
              mercado e seus produtos.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};
