import logo from "../assets/logo.png"
import usuario from "../assets/usuario.png"
import favs from "../assets/favs.png"
import "../index.css"
import CardWidget from "./CartWidget"
import { Link } from "react-router-dom"

const categories = [
    {name:"Acción", id:0, route:"/category/Accion"},
    {name:"Fps", id:1, route:"/category/Fps"},
    {name:"RPG", id:2, route:"/category/Rpg"},
    {name:"Deportes", id:3, route:"/category/Deportes"},
    {name:"Estrategia", id:4, route:"/category/Estrategia"}
]

const NavBar = () => {
    return (
        <header className="flex flex-col items-center">
            <Link to="/"><img className="w-[500px]" src={logo} alt="logo" /></Link>
            <nav className="flex justify-evenly items-center w-full py-4">
                {categories.map((category) => (
                <Link key={category.id} className="font-Barlow text-xl text-white" to={category.route}>{category.name}</Link>))}
                <img src={usuario} alt="usuario" />
                <img src={favs} alt="favoritos" />
                <Link to="/cart"><CardWidget /></Link>
            </nav>
        </header>
    )
}

export default NavBar