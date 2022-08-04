import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { RingLoader } from 'react-spinners';
import { useState } from "react"
import { useContext } from "react"
import { cartContext } from "../Context/CartContext"
import { db } from "../firebase/firebase"

const Form = () => {

    const { priceTotal, productsCart, clear } = useContext(cartContext)
    const [loading, setLoading] = useState(false)
    const [nombre, setNombre] = useState("")
    const [tel, setTel] = useState()
    const [mail, setMail] = useState("")
    const [comm, setComm] = useState("")
    const [idVenta, setIdVenta] = useState()

    const ordenDeCompra = {
        nombre: nombre,
        telefono: tel,
        mail: mail,
        comentario: comm,
        items: productsCart.map((product)=>{
        return {
            id: product.id,
            title: product.title,
            quantity: product.quantity
        }}),
        dia: serverTimestamp(),
        total: priceTotal
    }

    const checkout = () => {
        setLoading(true)
        const ventasCollection = collection(db, "ventas")
        addDoc(ventasCollection, ordenDeCompra)
            .then((res)=>
                setIdVenta(res.id))
            .finally(()=> 
            setLoading(false),
            clear()
            )
    }

    return (
        <>
            <fieldset>
                <form onSubmit={(evt)=>evt.preventDefault()} className="flex flex-col w-[500px] mx-auto border-2 rounded-lg border-Oro p-5 bg-Rojo-Dark">
                    <label className="font-Barlow text-4xl text-white" htmlFor="nombre">Nombre: </label>
                    <input onChange={(evt)=>setNombre(evt.target.value)} className="font-Barlow w-60 mb-5 mt-2 border border-Oro rounded-lg bg-white outline-none" type="text" name="nombre" id="" />
                    <label className="font-Barlow text-4xl text-white" htmlFor="telefono">Teléfono: </label>
                    <input onChange={(evt)=>setTel(evt.target.value)} className="font-Barlow w-60 border border-Oro rounded-lg bg-white outline-none mb-5 mt-2" type="text" name="telefono" />
                    <label className="font-Barlow text-4xl text-white" htmlFor="email">Mail: </label>
                    <input onChange={(evt)=>setMail(evt.target.value)} className="font-Barlow w-60 border border-Oro rounded-lg bg-white outline-none mb-5 mt-2" type="email" name="email" />
                    <label className="font-Barlow text-4xl text-white" htmlFor="comentario">Comentarios: </label>
                    <input onChange={(evt)=>setComm(evt.target.value)} className="font-Barlow h-20 border border-Oro rounded-lg bg-white outline-none mb-5 mt-2" type="text" name="comentario" />
                    <h2 className='font-Barlow text-5xl text-white mx-auto my-5'>Total: ${priceTotal}</h2>
                    <button onClick={()=>checkout()} type="submit" className='font-Barlow text-2xl hover:text-Oro text-white bg-[#461111] border border-Oro rounded-full p-2 mt-5'>Finalizar compra</button>
                </form>
            </fieldset>
            {loading ? <div className='flex justify-center mt-20'><RingLoader color="#ffffff" size={120} /></div> : (idVenta !==undefined ? <h2 className="font-Barlow text-4xl text-white text-center mt-10">Tu orden de compra es: {idVenta}</h2> : <p></p>)}
        </> 
    )
}

export default Form