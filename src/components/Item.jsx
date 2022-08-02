import { Link } from "react-router-dom";

const Item = ({item}) => {
        return (
                <div className="flex flex-col items-center transition-all hover:ring-2 ring-Oro shadow-[20px_20px_50px_-15px_rgba(0,0,0,0.5)]">
                        <Link to={`/item/${item.id}`}> <img className='w-40 border-b-2 border-Oro' src={item.pictureUrl} alt="" /> </Link>
                        <div className="flex flex-col justify-between items-center bg-Rojo-Dark w-40 h-[108px]">
                                <h2 className="font-Barlow text-lg text-white text-center">{item.title}</h2>
                                <h3 className="font-Barlow text-sm text-white">{item.año}</h3>
                                <h3 className="font-Barlow text-lg text-white">${item.price}</h3>
                        </div>
                </div>)
}

export default Item