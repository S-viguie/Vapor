import carrito from "../assets/carrito.png"

const CardWidget = () => {
    return (
        <div className="flex">
            <img src={carrito} alt="carrito" />
            <p className="font-Barlow text-white text-3xl ml-2 mt-1">0</p>
        </div>
    )
}

export default CardWidget