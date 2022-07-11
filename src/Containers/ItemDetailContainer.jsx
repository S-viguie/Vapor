import { useEffect, useState } from 'react'
import ItemDetail from '../components/ItemDetail';
import { RingLoader } from 'react-spinners';
import { useParams } from 'react-router-dom';
import prodIniciales from '../utils/data';

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({})
    const [loading, setLoading] = useState(false)
    const {itemId} = useParams()

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setDetail(prodIniciales.find((prod) => prod.id == itemId))
            setLoading(false)
        }, 1000);
    },[])

    return (
    loading ? <div className='flex justify-center mt-20'><RingLoader color="#ffffff" size={120} /></div> : <ItemDetail detail={detail} />
    )
}

export default ItemDetailContainer