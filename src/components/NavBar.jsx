import logo from "../assets/logo.png"
import usuario from "../assets/usuario.png"
import favs from "../assets/favs.png"
import "../index.css"
import CardWidget from "./CartWidget"

const NavBar = () => {
    return (
        <header className="flex flex-col items-center">
            <img className="w-[500px]" src={logo} alt="logo" />
            <nav className="flex justify-evenly items-center w-full py-4">
                <a className="font-Barlow text-3xl text-white" href="http://">Categorias</a>
                <a className="font-Barlow text-3xl text-black bg-white outline outline-1 rounded-full pb-1 px-3" href="http://">Buscador</a>
                <img src={usuario} alt="usuario" />
                <img src={favs} alt="favoritos" />
                <CardWidget />
            </nav>
        </header>
    )
}

export default NavBar