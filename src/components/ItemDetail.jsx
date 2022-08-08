import {React, useContext} from 'react'
import ItemCount from './ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../Context/CartContext'
import { favContext } from '../Context/FavContext'
import FavButton from './FavButton'
import Indice from './Indice'
import { Fade, Slide } from 'react-reveal'

const ItemDetail = ({detail}) => {

    const [finalized, setFinalized] = useState(false)
    const {addItem} = useContext(cartContext)
    const {addFav} = useContext(favContext)

    const onAdd = (contador) => {
        setFinalized(true)
        addItem(detail, contador)
    }

    return (
        <>
        <Slide duration={500} left>
            <Indice cat={detail.category} title={detail.title}/>
            <div className='flex flex-col items-center w-[1000px] mx-auto mt-10 pt-5 bg-Rojo-Dark border rounded-lg border-Oro'>
                <div className='flex mb-5 w-[960px] justify-between items-center'>
                    <img src={detail.pictureUrl2} alt="" />
                    <div className='flex flex-col items-center gap-y-6 relative w-[313px]'>
                        <h2 className='font-Barlow text-4xl text-white text-center'>{detail.title}</h2>
                        <h2 className='font-Barlow text-xl text-white'> <img className='absolute w-6 right-[265px]' src="https://firebasestorage.googleapis.com/v0/b/vapor-c6404.appspot.com/o/estrella.png?alt=media&token=c78feb37-0989-4e7b-83d4-05c9f207bf4c" alt="estrella"/> Calificación: {detail.rating}</h2>
                        <h2 className='font-Barlow text-6xl text-white'>${detail.price}</h2>
                        {finalized ? <Fade><Link to="/cart" ><button className='w-64 mt-5 border-2 rounded-xl border-Oro bg-[#461111] font-Barlow text-white text-3xl p-2 hover:text-Oro active:scale-90'>Finalizar compra</button></Link></Fade> : <ItemCount stock={10} onAdd={onAdd} />}
                        <FavButton addFav={()=>addFav(detail)} />
                    </div>
                </div>
                <div className='flex justify-between w-[950px] border-t border-Oro'>
                    <div className='flex flex-col w-[650px] gap-y-5 pt-2'>
                        <h2 className='font-Barlow text-xl text-white'>Review</h2>
                        <p className='font-Barlow text-sm text-white'>{detail.review}</p>
                    </div>
                    <div className='flex flex-col w-[250px] gap-y-5 pt-2'>
                        <h2 className='font-Barlow text-xl text-white'>Requisitos</h2>
                        <div className='flex flex-col gap-y-3'>
                            <p className='font-Barlow text-sm text-white'>Procesador: {detail.processor}</p>
                            <p className='font-Barlow text-sm text-white'>Memoria: {detail.memory}</p>
                            <p className='font-Barlow text-sm text-white'>Gráficos: {detail.graphics}</p>
                            <p className='font-Barlow text-sm text-white mb-5'>Almacenamiento: {detail.storage}</p>
                        </div>
                    </div>
                </div>
            </div>
            </Slide>
        </>
    )
}

export default ItemDetail