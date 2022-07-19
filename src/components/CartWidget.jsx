import { useContext, useEffect, useState } from "react"
import { cartContext } from "../Context/CartContext"
import carrito from "../assets/carrito.png"

const CardWidget = () => {

    const { productsCart } = useContext (cartContext)
    const [qtyTotal, setQtyTotal] = useState(0)

    useEffect (()=> {
        const total = productsCart.reduce((acc, pr)=> acc+pr.quantity, 0)
        setQtyTotal(total)
    },[productsCart])

    return (
        productsCart.length !== 0 ? 
        <div className="flex">
            <img src={carrito} alt="carrito" />
            <div className="rounded-full bg-red-500 h-7 w-7 ml-2 mt-1">
                <p className="font-Barlow text-white text-xl text-center">{qtyTotal}</p>
            </div>
        </div> :
        <p></p>
    )
}

export default CardWidget