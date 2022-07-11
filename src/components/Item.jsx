import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <div className="flex flex-col items-center">
                <Link to={`/item/${item.id}`}> <img className='transition-all w-40 hover:scale-125' src={item.pictureUrl} alt="" /> </Link>
                <div className="bg-Rojo-Dark w-40">
                <h2 className="font-Barlow text-l text-white">{item.title}</h2>
                <h3 className="font-Barlow text-sm text-white">{item.category}</h3>
                <h3 className="font-Barlow text-sm text-white">{item.año}</h3>
                <h3 className="font-Barlow text-sm text-white">${item.price}</h3>
                </div>
        </div>)
}

export default Item