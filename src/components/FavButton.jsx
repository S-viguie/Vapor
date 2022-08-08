const FavButton = ({ addFav }) => {
    return (
        <button className="h-[50px] w-[50px] transition hover:scale-125 active:scale-90" onClick={addFav}><img src="https://firebasestorage.googleapis.com/v0/b/vapor-c6404.appspot.com/o/corazon.png?alt=media&token=259a148d-d186-4ae2-8133-069472fae64a" alt="corazon"/></button>
    )
}

export default FavButton