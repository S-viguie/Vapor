import { useState } from "react";

const ItemCount = ({stock, initial = 1}) => {
    const [contador, setContador] = useState(initial)

    const sumar = () => {
        contador<stock && setContador(contador+1)
    }

    const restar = () => {
        contador>1 && setContador(contador-1)
    }

    const onAdd = () => {
        contador!==0 && alert (`${contador} items agregados`)
        contador!==0 && setContador(1)
    }

    return (
        <div className="flex justify-center w-64 mx-auto mt-10 border-2 rounded-xl border-white bg-white">
            <button className="font-Barlow text-black text-3xl" onClick={restar}>-</button>
            <p className="font-Barlow text-black text-3xl mx-10">{contador}</p>
            <button className="font-Barlow text-black text-3xl" onClick={sumar}>+</button>
            <button className="font-Barlow text-black text-3xl ml-10" onClick={onAdd}>ADD</button>
        </div>
    )
}

export default ItemCount