import { createContext, useState } from "react";

export const cartContext = createContext()
const {Provider} = cartContext

const CartProvider = ({ children }) => {

    const [productsCart, setProductsCart] = useState([])

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
        <Provider value={{productsCart, addItem, removeItem, clear}}>
            {children}
        </Provider>
    )
}

export default CartProvider