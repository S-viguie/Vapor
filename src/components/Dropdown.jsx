import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { db } from "../firebase/firebase"
import { getDocs, collection, query, orderBy } from "firebase/firestore"

const Dropdown = () => {

    const [options, setOptions] = useState(false)
    const [categories, setCategories] = useState([])

    useEffect(() => {

        const catCollection = collection (db, "categorias")
        const q = query(catCollection, orderBy("name"))

        getDocs(q)
            .then(res => {
                const aux = res.docs.map(doc =>{
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setCategories(aux)
            })
    }, [])
    

    return (
        <div className='relative'>
            <div className="font-Barlow text-3xl text-white" onMouseEnter={()=>setOptions(true)} onMouseOut={()=>setOptions(false)}>
                Categorias <span className='text-sm text-Oro'>▼</span> 
            </div>
            <div className='flex flex-col absolute top-[-10px] right-[-10px] z-50 items-center bg-[#461111] w-[200px] pb-2 border border-[#461111] hover:border-Oro'>
                {options ? categories.map((category) => (
                <Link onMouseEnter={()=>setOptions(true)} onMouseOut={()=>setOptions(false)} key={category.id} className='font-Barlow text-xl text-white text-center hover:border-b-2 border-Oro hover:text-Oro w-[180px] py-5' to={category.route}> <img className='absolute' src={category.icon} alt="icono"/> {category.name}</Link>))
                : <p></p>}
            </div>
        </div>
    )
}

export default Dropdown