import { useNavigate, useLocation } from "react-router-dom"

const Menu = () => {
  const navigate = useNavigate()

  const handlePage = (page: string) => {
    navigate(page)
  }

  const location = useLocation();

  return (
    <>
    {location.pathname === '/' && (

    <div className="flex justify-center items-center ml-auto w-1/3 bg-gradient-to-b from-[#7B4296] from-[-45%] via-[#000000] via-50% to-primary-color to-[130%]">
        <div className="flex flex-col items-center">
            <p className="text-white text-xl font-bold font-vietnam mb-5">Login</p>

            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2.5">
                    <label htmlFor="email" className="text-white font-vietnam text-xs font-bold">E-mail</label>
                    <input className="rounded-xl w-72 px-6 py-1.5" id="email" type="email" />
                </div>

                <div className="flex flex-col gap-2.5">
                    <label htmlFor="password" className="text-white font-vietnam text-xs font-bold">Senha</label>
                    <input className="rounded-xl w-72 px-6 py-1.5" id="password" type="password" />
                </div>

                <div className="flex flex-col items-center gap-6">
                    <button className="text-white underline font-bold">
                        Esqueci minha senha
                    </button>

                    <button className="rounded-md bg-gradient-to-r from-primary-color to-secondary-red w-40 h-8 px-12 text-white font-vietnam">
                        Entrar
                    </button>

                    <button className="text-white font-bold" onClick={() => handlePage("/register")}>
                        Quero me cadastrar
                    </button>
                </div>
            </div>
        </div>
    </div>
    )}

{location.pathname === '/register' && (

<div className="flex justify-center items-center ml-auto w-1/3 bg-gradient-to-b from-[#7B4296] from-[-45%] via-[#000000] via-50% to-primary-color to-[130%]">
    <div className="flex flex-col items-center">
        <p className="text-white text-xl font-bold font-vietnam mb-5">Cadastro</p>

        <div className="flex flex-col gap-5 items-center">
            <div className="flex flex-col gap-2.5">
                <label htmlFor="email" className="text-white font-vietnam text-xs font-bold">E-mail</label>
                <input className="rounded-xl w-72 px-6 py-1.5" id="email" type="email"/>
            </div>

            <div className="flex flex-col gap-2.5">
                <label htmlFor="name" className="text-white font-vietnam text-xs font-bold">Nome</label>
                <input className="rounded-xl w-72 px-6 py-1.5" id="name" type="text"/>
            </div>

            <div className="flex flex-col gap-2.5">
                <label htmlFor="password" className="text-white font-vietnam text-xs font-bold">Senha</label>
                <input className="rounded-xl w-72 px-6 py-1.5" id="password" type="password"/>
            </div>

            <div className="flex flex-col gap-2.5">
                <label htmlFor="passwordDouble" className="text-white font-vietnam text-xs font-bold">Digite novamente a senha</label>
                <input className="rounded-xl w-72 px-6 py-1.5" id="passwordDouble" type="password"/>
            </div>


            <div className="flex flex-col items-center gap-6">
                <button className="text-white font-bold">
                    Confira nossos termos de propriedade intelectual
                </button>

                <button className="rounded-md bg-gradient-to-r from-primary-color to-secondary-red w-40 h-8 px-12 text-white font-vietnam">
                    Cadastrar
                </button>

                <button className="text-white font-bold" onClick={() => handlePage("/")}>
                    Fazer Login
                </button>
            </div>
        </div>
    </div>
</div>
)}
    </>
  )
}

export default Menu