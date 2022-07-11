import Item from "../components/Item"

const ItemList = ({prods}) => {
    console.log(prods)

    return (
        <div className="flex flex-wrap justify-center w-9/12 mx-auto gap-16 mt-5">
            {prods?.map((prod)=> (
                <Item key={prod.id} item={prod}/>
            ))}
        </div>
    )
}

export default ItemList