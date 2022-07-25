import { useEffect, useState } from 'react'
import ItemDetail from '../components/ItemDetail';
import { RingLoader } from 'react-spinners';
import { useParams } from 'react-router-dom';
import { db } from "../firebase/firebase";
import { getDoc, collection, doc } from "firebase/firestore"

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({})
    const [loading, setLoading] = useState(false)
    const {itemId} = useParams()

    useEffect(() => {
        setLoading(true)
        const prodCollection = collection(db, "productos")
        getDoc(doc(prodCollection, itemId))
            .then(result => {
                const detail = {
                    id: result.id,
                    ...result.data()
                }
                setDetail(detail)
            })
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
    },[itemId])

    return (
    loading ? <div className='flex justify-center mt-20'><RingLoader color="#ffffff" size={120} /></div> : <ItemDetail detail={detail} />
    )
}

export default ItemDetailContainer