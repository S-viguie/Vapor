import {useEffect, useState} from 'react'
import ItemList from "./ItemList";
import { RingLoader } from 'react-spinners';

const prodIniciales = [
    {title: "Grand Theft Auto V", id:0, price:500, description:"Acción / 2013", pictureUrl:'https://as01.epimg.net//meristation/imagenes/2020/05/18/game_cover/459398911589803277.jpg'},
    {title: "Overwatch", id:1, price:700, description:"Fps / 2016", pictureUrl:"https://as01.epimg.net//meristation/imagenes/2019/09/05/game_cover/974564061567671841.jpg"},
    {title: "Age of Empires II", id:2, price:300, description:"Estrategia / 2019", pictureUrl:"https://as01.epimg.net/meristation/imagenes/2019/09/14/game_cover/609478601568448183.jpg"}
]

const promesa = new Promise((resolve) => {
    setTimeout(() => {
        resolve(prodIniciales)
    }, 2000);
})

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        promesa.then ((data) => {
            setProductos(data)
        })
        .finally (()=> {
            setLoading(false)
        })
        },[])

    return (
        <>
            {loading ? <div className='flex justify-center mt-20'><RingLoader color="#ffffff" size={120} /></div> : <ItemList prods={productos} />}
        </>
    )
}

export default ItemListContainer