import { useContext, useEffect, useState } from "react"
import { cartContext } from "../Context/CartContext"

const CardWidget = () => {

    const { productsCart } = useContext (cartContext)
    const [qtyTotal, setQtyTotal] = useState(0)

    useEffect (()=> {
        const total = productsCart.reduce((acc, pr)=> acc+pr.quantity, 0)
        setQtyTotal(total)
    },[productsCart])

    return (
        <div className="flex transition hover:scale-125 active:scale-100">
            <img src={"https://firebasestorage.googleapis.com/v0/b/vapor-c6404.appspot.com/o/carrito.png?alt=media&token=7e26f01e-c3e1-41f3-ba54-9e24a9ab07ea"} alt="carrito" />
            <div className="rounded-full bg-red-500 h-7 w-7 ml-2 mt-1">
                <p className="font-Barlow text-white text-xl text-center">{qtyTotal}</p>
            </div>
        </div>
    )
}

export default CardWidget