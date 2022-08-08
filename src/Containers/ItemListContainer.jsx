import {useEffect, useState} from 'react'
import ItemList from "./ItemList";
import { RingLoader } from 'react-spinners';
import { useParams } from 'react-router-dom';
import { db } from "../firebase/firebase"
import { getDocs, collection, query, where, orderBy,} from "firebase/firestore"
import Indice from '../components/Indice';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)
    const {categoryName} = useParams()

    useEffect(() => {
        setLoading(true)
        const prodCollection = collection (db, "productos")
        const q = query(prodCollection, where("category", "==", `${categoryName}`))
        const p = query(prodCollection, orderBy("title"))

        getDocs(categoryName ? q : p)
            .then(res=> {
                const lista = res.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setProductos(lista)
            })
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
    }, [categoryName])

    return (
        <>
            {categoryName ? <Indice cat={categoryName} /> : <h2 className="text-center font-Barlow text-5xl text-white text mb-10 underline decoration-Oro">Catálogo de productos</h2>}
            {loading ? <div className='flex justify-center mt-20 h-[1000px]'><RingLoader color="#ffffff" size={120} /></div> : <ItemList prods={productos} />}
        </>
    )
}

export default ItemListContainer