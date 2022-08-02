import { Link } from "react-router-dom"

const Indice = ( {cat, title} ) => {
    return (
        <div className="flex items-center justify-center">
            <Link className="w-6 mr-5" to="/"><img src={"https://firebasestorage.googleapis.com/v0/b/vapor-c6404.appspot.com/o/casa.png?alt=media&token=16d8a700-c3f7-4d56-974f-cd74985ca1de"} alt="home" /></Link>
            <p className="font-Barlow text-Oro text-lg mr-5">&gt;</p>
            <p className="font-Barlow text-white text-lg mr-5">{cat}</p>
            {title ? <><p className="font-Barlow text-Oro text-lg mr-5">&gt;</p>  <p className="font-Barlow text-white text-lg">{title}</p></> : <p></p>}
        </div>
    )
}

export default Indice