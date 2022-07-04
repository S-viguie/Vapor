import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({detail}) => {
    return (
        <div className='flex flex-col items-center w-[1000px] mx-auto mt-10 pt-5 bg-Rojo-Dark'>
            <div className='flex mb-5'>
                <img src={detail.pictureUrl} alt="" />
                <div className='flex flex-col items-center ml-8 mt-5 gap-y-6'>
                    <h2 className='font-Barlow text-4xl text-white'>{detail.title}</h2>
                    <h2 className='font-Barlow text-xl text-white'>Calificación: {detail.rating}</h2>
                    <h2 className='font-Barlow text-6xl text-white'>${detail.price}</h2>
                    <ItemCount stock={10} />
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
                        <p className='font-Barlow text-sm text-white'>Almacenamiento: {detail.storage}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail