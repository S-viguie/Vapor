import logo from "../assets/logo.png"
import carrito from "../assets/carrito.png"
import usuario from "../assets/usuario.png"
import favs from "../assets/favs.png"
import "../App.css"

const NavBar = () => {
    return (
        <header style={styles.headerStyle}>
            <img src={logo} alt="logo" />
            <nav style={styles.navStyle}>
                <a style={styles.subText} href="http://">Categorias</a>
                <a style={styles.subText} href="http://">Buscador</a>
                <img src={usuario} alt="usuario" />
                <img src={favs} alt="favoritos" />
                <img src={carrito} alt="carrito" />
            </nav>
        </header>
    )
}

export default NavBar

const styles = {
    headerStyle: {
        backgroundColor: "#003024",
    },

    navStyle: {
        display: "flex",
        justifyContent: "space-evenly",
    },

    subText: {
        fontFamily: "'Barlow', sans-serif",
        fontSize: "2em",
        color: "#00ffb0",
        textDecoration: "none",
    },

    buscadorStyle: {
        border: "#61dafb"
    }
}