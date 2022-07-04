import {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail';
import {RingLoader} from 'react-spinners';

const itemDetail = {
    title: "Grand Theft Auto V", 
    id:0, 
    rating:"7/10",
    price:500, 
    description:"Acción / 2013", 
    pictureUrl:'https://s1.gaming-cdn.com/images/products/186/616x353/grand-theft-auto-v-pc-juego-rockstar-cover.jpg?v=1647095361',
    review: "Grand Theft Auto V para PC es un juego de acción y aventuras, el quinto de la serie GTA. Como ya es tradición en los juegos de esta serie, se obtienen puntos mediante la comisión de delitos. El juego alterna entre la narrativa visual y la jugabilidad en tercera y en primera persona. El jugador toma el papel de tres criminales tratando de huir de una determinada agencia del gobierno y cometiendo asaltos. No se elige un solo personaje para jugar, la narrativa del juego salta de un personaje a otro. \nEl juego se desarrolla en la ciudad ficticia de San Andreas, la cual se basa vagamente en la vida genérica del sur de California. Aunque gran parte de la acción del juego se desarrolla en la ciudad, el mundo es mucho más grande comparado con las entregas previas de GTA, y los jugadores pueden explorarlo libremente. La ciudad se ubica en el condado de Blaine, cerca de otra ciudad llamada Los Santos (ambas ficticias) y se puede acceder a todas las áreas del juego desde el inicio.",
    processor: "Intel Core i5 3470 @ 3.2GHz (4 CPUs) / AMD X8 FX-8350 @ 4GHz (8 CPUs)",
    memory: "8 GB RAM",
    graphics: "NVIDIA GTX 660 2GB / AMD HD 7870 2GB",
    storage: "72 GB available space"
}

const promesa = new Promise ((resolve) => {
    setTimeout(() => {
        resolve(itemDetail)
    }, 2000);
})

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        promesa.then ((data) =>{
            setDetail(data)
        })
        .finally (() => {
            setLoading(false)
        })
    }, [])
    

    return (
    loading ? <div className='flex justify-center mt-20'><RingLoader color="#ffffff" size={120} /></div> : <ItemDetail detail={detail} />
    )
}

export default ItemDetailContainer