import { useContext } from 'react'
import { cartContext } from '../Context/CartContext'

const Cart = () => {

  const {productsCart, removeItem, clear} = useContext(cartContext)

  return (
    <div className='flex flex-col items-center'>
      {productsCart.map((product) => 
        <div key={product.id} className="flex justify-between w-[1000px] pb-5 mb-5 border-b border-white">
          <div className='flex justify-start'>
            <img className='w-32' src={product.pictureUrl} alt=""/>
            <div className='flex flex-col justify-evenly ml-16'>
              <h1 className='font-Barlow text-4xl text-white'>{product.title}</h1> 
              <h2 className='font-Barlow text-l text-white'>Precio: ${product.price}</h2>
              <h2 className='font-Barlow text-l text-white'>Cantidad: {product.quantity}</h2>
            </div>
          </div>
          <div className='flex justify-end'>
            <div className='flex flex-col justify-center ml-16'>
              <h2 className='font-Barlow text-5xl text-white'>${product.quantity*product.price}</h2>
            </div>
            <div className='flex flex-col justify-center ml-16'>
              <button className='font-Barlow text-6xl h-[60px] w-[60px] rounded-full bg-white text-red-500' onClick={()=> removeItem(product.id)}>-</button>
            </div>
          </div>
        </div>
      )}
      <div className='flex justify-between w-[1000px]'>
        <button className='font-Barlow text-2xl bg-white text-black rounded-full p-2' onClick={clear}>Limpiar</button>
        <h2 className='font-Barlow text-5xl text-white'>Total: $1000</h2>
      </div>
    </div>
  )
}

export default Cart