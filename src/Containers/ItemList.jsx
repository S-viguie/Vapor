import Item from "../components/Item"
import { Slide } from "react-reveal"

const ItemList = ({prods}) => {

    return (
        <Slide duration={500} left>
            <div className="flex flex-wrap justify-center w-[1200px] mx-auto gap-16 mt-5">
                {prods?.map((prod)=> (
                    <Item key={prod.id} item={prod}/>
                ))}
            </div>
        </Slide>
    )
}

export default ItemList