import logo from "../assets/logo.png"
import "../index.css"
import CardWidget from "./CartWidget"
import { Link } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import { db } from "../firebase/firebase"
import { getDocs, collection } from "firebase/firestore"
import Dropdown from "./Dropdown"
import { cartContext } from "../Context/CartContext"

const NavBar = () => {

    const [value, setValue] = useState("")
    const [items, setItems] = useState([])
    const [search, setSearch] = useState([])
    const { productsCart } = useContext (cartContext)

    const change = (evt) => {
        setValue(evt.target.value.toLowerCase())
    }

    const clear = () => {
        setValue("")
    }

    useEffect(() => {
        const prodCollection = collection (db, "productos")

        getDocs(prodCollection)
            .then(res=> {
                const lista = res.docs.map(doc => {
                    return {
                        id: doc.id,
                        title: doc.data().title.toLowerCase(),
                        picture: doc.data().pictureUrl,
                    }
                })
                setItems(lista)
            })
    }, [])

    useEffect(() => {
        setSearch(items.filter((item)=> item.title.startsWith(value)))
    }, [value, items])
    

    return (
        <header className="flex flex-col items-center">
            <Link to="/"><img className="w-[300px] mt-5 transition hover:scale-110 active:scale-100" src={logo} alt="logo" /></Link>
            <nav className="flex justify-evenly items-center w-full pt-2">
                {<Dropdown />}
                <div className="flex flex-col relative">
                    <input type="text" name="search" placeholder="Buscar" autoComplete="off" className="font-Barlow w-[300px] text-white text-lg border p-1 border-Oro rounded-lg bg-[#461111] outline-none bg-[url('https://firebasestorage.googleapis.com/v0/b/vapor-c6404.appspot.com/o/buscar.png?alt=media&token=5bbd6a95-7bb9-429a-8364-717376ffd066')] bg-[length:20px_20px] bg-no-repeat bg-[center_right_0.5rem] transition focus:bg-Rojo-Dark focus:scale-110" onChange={change} value={value} />
                    <div className="absolute top-[40px] z-50">
                        {value !== "" ? search.map((item)=> (
                            <Link key={item.id} to={`/item/${item.id}`} onClick={clear}> <div className="font-Barlow bg-Rojo-Dark text-white hover:text-Oro w-[300px] h-[50px] text-center"><img className="w-8 ml-2 absolute" src={item.picture} alt="tapa"/> <p className="pt-3">{item.title.toUpperCase()}</p></div> </Link>
                        )) : <p></p>}
                    </div>
                </div>
                <Link to="/fav"> <img className="transition hover:scale-125 active:scale-100" src="https://firebasestorage.googleapis.com/v0/b/vapor-c6404.appspot.com/o/favs.png?alt=media&token=86a4b92a-d752-425f-babc-f2f9e4dbe826" alt="favoritos" /> </Link>
                {productsCart.length !== 0 ? <Link to="/cart"><CardWidget /></Link> : <div className="absolute"></div>}
            </nav>
        </header>
    )
}

export default NavBar