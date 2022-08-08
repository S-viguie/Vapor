import { useState } from "react";

const ItemCount = ({stock, initial = 1, onAdd}) => {
    const [contador, setContador] = useState(initial)

    const sumar = () => {
        contador<stock && setContador(contador+1)
    }

    const restar = () => {
        contador>1 && setContador(contador-1)
    }

    const agregar = () => {
        onAdd(contador)
    }

    return (
        <div className="flex font-Barlow text-white justify-center w-72 mt-5 p-2 border-2 rounded-xl border-Oro bg-[#461111]">
            <button className="text-3xl hover:text-Oro" onClick={restar}>-</button>
            <p className="text-3xl mx-10">{contador}</p>
            <button className="text-3xl hover:text-Oro" onClick={sumar}>+</button>
            <button className="text-3xl ml-10 hover:text-Oro active:scale-90" onClick={agregar}>Agregar</button>
        </div>
    )
}

export default ItemCount