import "../App.css"
import ItemCount from "./ItemCount"

const ItemListContainer = ({ mensaje }) => {
    return (
        <>
            <h1 style={styles.tituloStyle}>{mensaje}</h1>
            <ItemCount stock={5} initial={0} />
        </>
    )
}

export default ItemListContainer

const styles = {
    tituloStyle: {
        fontFamily: "'Barlow', sans-serif",
        color: "#00bd82",
        fontSize: "3em",
    },
}