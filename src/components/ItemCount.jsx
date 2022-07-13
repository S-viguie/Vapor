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
        <div className="flex justify-center w-72 mt-5 border-2 rounded-xl border-white bg-white">
            <button className="font-Barlow text-black text-3xl" onClick={restar}>-</button>
            <p className="font-Barlow text-black text-3xl mx-10">{contador}</p>
            <button className="font-Barlow text-black text-3xl" onClick={sumar}>+</button>
            <button className="font-Barlow text-black text-3xl ml-10" onClick={agregar}>Agregar</button>
        </div>
    )
}

export default ItemCount