import { useContext } from "react"
import { favContext } from "../Context/FavContext"
import { Link } from "react-router-dom"

const Fav = () => {

  const {favs, removeFav} = useContext(favContext)

  return (
    favs.length !== 0 ?
    <div className='flex flex-col items-center border border-Oro rounded-lg w-[1200px] mx-auto py-4 bg-Rojo-Dark'>
      {favs.map((product) => 
        <div key={product.id} className="flex justify-between w-[1000px] pb-5 mb-5 border-b border-Oro">
          <div className='flex justify-start'>
            <img className='w-32' src={product.pictureUrl} alt=""/>
            <div className='flex flex-col justify-evenly ml-16'>
              <h1 className='font-Barlow text-4xl text-white'>{product.title}</h1> 
              <h2 className='font-Barlow text-l text-white'>Precio: ${product.price}</h2>
            </div>
          </div>
          <div className='flex justify-end items-center'>
            <div className='flex flex-col justify-center ml-16'>
              <button className='font-Barlow text-6xl h-[60px] w-[60px] rounded-full border border-Oro bg-[#E8dede] text-Rojo-Medio' onClick={()=>removeFav(product)}>-</button>
            </div>
          </div>
        </div>
      )} 
    </div> :
    <div className='flex flex-col items-center h-[300px]'>
      <h1 className='font-Barlow text-5xl text-white'>No hay favoritos</h1>
      <Link to="/"> <button className='font-Barlow text-2xl bg-[#461111] hover:text-Oro text-white border border-Oro rounded-full p-2 mt-10'>Volver</button> </Link>
    </div>
  )
}

export default Fav