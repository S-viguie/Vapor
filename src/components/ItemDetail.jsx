import {React, useContext} from 'react'
import ItemCount from './ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../Context/CartContext'

const ItemDetail = ({detail}) => {

    const [finalized, setFinalized] = useState(false)
    const {addItem} = useContext(cartContext)

    const onAdd = (contador) => {
        setFinalized(true)
        addItem(detail, contador)
    }

    return (
        <div className='flex flex-col items-center w-[1000px] mx-auto mt-10 pt-5 bg-Rojo-Dark'>
            <div className='flex mb-5'>
                <img src={detail.pictureUrl2} alt="" />
                <div className='flex flex-col items-center ml-8 mt-5 gap-y-6'>
                    <h2 className='font-Barlow text-4xl text-white'>{detail.title}</h2>
                    <h2 className='font-Barlow text-xl text-white'>Calificación: {detail.rating}</h2>
                    <h2 className='font-Barlow text-6xl text-white'>${detail.price}</h2>
                    {finalized ? <Link to="/cart" ><button className='w-72 mt-5 border-2 rounded-xl border-white bg-white font-Barlow text-black text-3xl ml-10'>Finalizar compra</button></Link> : <ItemCount stock={10} onAdd={onAdd} />}
                </div>
            </div>
            <div className='flex justify-between w-[950px]'>
                <div className='flex flex-col w-[650px] gap-y-5'>
                    <h2 className='font-Barlow text-xl text-white'>Review</h2>
                    <p className='font-Barlow text-sm text-white'>{detail.review}</p>
                </div>
                <div className='flex flex-col w-[250px] gap-y-5'>
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
    )
}

export default ItemDetail