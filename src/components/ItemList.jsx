import Item from "./Item"

const ItemList = ({prods}) => {
    console.log(prods)

    return (
        <div className="flex justify-center gap-16 mt-5">
            {prods?.map((prod)=> (
                <Item key={prod.id} item={prod}/>
            ))}
        </div>
    )
}

export default ItemList