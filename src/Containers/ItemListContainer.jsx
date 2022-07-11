import {useEffect, useState} from 'react'
import ItemList from "./ItemList";
import { RingLoader } from 'react-spinners';
import { useParams } from 'react-router-dom';
import prodIniciales from "../utils/data";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)
    const {categoryName} = useParams()

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setProductos(categoryName ? prodIniciales.filter((prod) => prod.category === categoryName) : prodIniciales)
            setLoading(false)
        }, 2000);
        },
        [categoryName])

    return (
        <>
            {loading ? <div className='flex justify-center mt-20'><RingLoader color="#ffffff" size={120} /></div> : <ItemList prods={productos} />}
        </>
    )
}

export default ItemListContainer