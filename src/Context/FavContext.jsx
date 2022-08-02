import { createContext, useState } from "react";

export const favContext = createContext()
const { Provider } = favContext

const FavProvider = ({ children }) => {

    const [favs, setFavs] = useState([])

    const addFav = (detail) => {
        if ((favs.some(item=> item.id === detail.id)) === false) {
            setFavs([...favs, detail])
        } 
    }

    const removeFav = (detail) => {
        const copia = [...favs]
        const aux = copia.filter((el) => el.id !== detail.id)
        setFavs(aux)
    }

    return (
        <Provider value={{addFav, removeFav, favs}}>
            {children}
        </Provider>
    )
}

export default FavProvider