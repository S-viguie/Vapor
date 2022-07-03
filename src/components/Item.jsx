const Item = ({item}) => {
    return (
        <div className="flex flex-col items-center">
            <img className='w-40' src={item.pictureUrl} alt="" />
            <div className="bg-Rojo-Dark w-40">
                <h2 className="font-Barlow text-l text-white">{item.title}</h2>
                <h3 className="font-Barlow text-sm text-white">{item.description}</h3>
                <h3 className="font-Barlow text-sm text-white">${item.price}</h3>
            </div>
        </div>)
}

export default Item