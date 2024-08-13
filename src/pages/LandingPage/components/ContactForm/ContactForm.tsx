export const ContactForm = () => {
  return (
    <div className='container'>
      <h2 className='text-xl font-bold text-center'>
        Tem alguma dúvida? Entre em contato conosco a partir do formulário
        abaixo!
      </h2>
      <form
        action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSdkIG7X16NKLPhHUN2w46TnLXSlmHajMivKGaVYT0PPQoQNdg/formResponse'
        method='POST'
        className='max-w-lg mx-auto p-8 rounded-lg'
      >
        <div className='mb-4'>
          <label
            htmlFor='name'
            className='block text-sm font-medium text-[#3b3939]'
          >
            Nome
          </label>
          <input
            type='text'
            name='entry.969173534' // Substitua pelo nome do campo do Google Forms
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm'
            id='name'
            required
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-[#3b3939]'
          >
            Email
          </label>
          <input
            type='email'
            name='entry.1881024199' // Substitua pelo nome do campo do Google Forms
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm'
            id='email'
            required
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='message'
            className='block text-sm font-medium text-[#3b3939]'
          >
            Mensagem
          </label>
          <textarea
            name='entry.660374310' // Substitua pelo nome do campo do Google Forms
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm'
            id='message'
            rows={5}
            required
          ></textarea>
        </div>
        <button
          type='submit'
          className='w-full bg-primary-color text-white py-2 px-4 rounded-md hover:bg-primary-color/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
