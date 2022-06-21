import carrito from "../assets/carrito.png"
import "../App.css"

const CardWidget = () => {
    return (
        <div style={styles.container}>
            <img src={carrito} alt="carrito" />
            <p style={styles.pStyle}>0</p>
        </div>
    )
}

export default CardWidget

const styles = {
    pStyle: {
        fontFamily: "'Barlow', sans-serif",
        color: "#00ffb0",
        fontSize: "1em",
        margin: "3px 0 0 5px"
    },

    container: {
        display: "flex",
    }
}