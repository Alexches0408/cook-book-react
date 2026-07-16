import { div, span } from "framer-motion/client";
import IngridientItem from "../PoductItem/IngridientItem";
import { type IngridientListProps } from "./IngridientList.types";

export default function IngridientList (
    {ingridients, onDelete, onChange}:IngridientListProps
) {
    // if (products.length === 0) return null;

    return (
        
        <div 
            className="flex flex-col w-full gap-2"
        >

            {ingridients.map(ingridient=> (
                <IngridientItem
                    key={ingridient.productId}
                    ingridient={ingridient}
                    onDelete={onDelete}
                    onChange={onChange}
                />
            ))}
        </div>
    )
}