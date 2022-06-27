import { useState } from "react";

const ItemCount = ({stock, initial}) => {
    const [contador, setContador] = useState(initial)

    const sumar = () => {
        contador<stock && setContador(contador+1)
    }

    const restar = () => {
        contador>0 && setContador(contador-1)
    }

    const onAdd = () => {
        if (contador!==0) {
        console.log (`${contador} items agregados`) 
        setContador(0)
        }
    }

    return (
        <div style={styles.divStyles}>
            <button onClick={restar}>-</button>
            <p style={styles.contadorStyle}>{contador}</p>
            <button onClick={sumar}>+</button>
            <button onClick={onAdd}>ADD</button>
        </div>
    )
}

export default ItemCount

const styles = {
    contadorStyle: {
        fontFamily: "'Barlow', sans-serif",
        color: "#00bd82",
        fontSize: "3em",
        margin: "0 20px"
    },

    divStyles: {
        display: "flex",
        justifyContent: "center"
    }
}