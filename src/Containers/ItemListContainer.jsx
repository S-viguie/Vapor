import {useEffect, useState} from 'react'
import ItemList from "./ItemList";
import { RingLoader } from 'react-spinners';
import { useParams } from 'react-router-dom';
import { db } from "../firebase/firebase"
import { getDocs, collection, query, where} from "firebase/firestore"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)
    const {categoryName} = useParams()

    useEffect(() => {
        setLoading(true)
        const prodCollection = collection (db, "productos")
        const q = query(prodCollection, where("category", "==", `${categoryName}`))

        getDocs(categoryName ? q : prodCollection)
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
            {loading ? <div className='flex justify-center mt-20'><RingLoader color="#ffffff" size={120} /></div> : <ItemList prods={productos} />}
        </>
    )
}

export default ItemListContainer