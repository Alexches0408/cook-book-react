import { div, span } from "framer-motion/client";
import IngridientItem from "../PoductItem/IngridientItem";
import { type IngridientListProps } from "./IngridientList.types";

export default function IngridientList (
    {ingridients, onDelete}:IngridientListProps
) {
    // if (products.length === 0) return null;

    return (
        
        <div>

            {ingridients.map(ingridient=> (
                <IngridientItem
                    key={ingridient.productId}
                    ingridient={ingridient}
                    onDelete={onDelete}
                />
            ))}
        </div>
    )
}