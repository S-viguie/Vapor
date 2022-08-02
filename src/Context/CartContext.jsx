import { createContext, useState, useEffect } from "react";

export const cartContext = createContext()
const { Provider } = cartContext

const CartProvider = ({ children }) => {

    const [productsCart, setProductsCart] = useState([])
    const [priceTotal, setPriceTotal] = useState()

    useEffect (() => {
        const aux = productsCart.map((product)=> product.quantity*product.price)
        const total = aux.reduce((acc,pr)=> acc+pr, 0)
        setPriceTotal(total)
    },[productsCart])

    const addItem = (detail, qty) => {
        if (isInCart(detail.id)) { 
            const copia = [...productsCart]
            const elem = copia.find((el)=> el.id === detail.id)
            elem.quantity += qty
            setProductsCart(copia)
        } else {
            setProductsCart([...productsCart, {...detail, quantity:qty}])
        }
    }

    const removeItem = (id) => {
        const copia = [...productsCart]
        const elem = copia.find((el)=> el.id === id)
        if (elem.quantity>1) {
            elem.quantity -= 1
            setProductsCart(copia)
        } else {
            const copiaDos = copia.filter((el)=> el.id !== id)
            setProductsCart(copiaDos)
        }
    }

    const clear = () => {
        setProductsCart([])
    }

    const isInCart = (id) => 
        productsCart.some((product) => product.id === id)
    

    return (
        <Provider value={{productsCart, priceTotal, addItem, removeItem, clear}}>
            {children}
        </Provider>
    )
}

export default CartProvider