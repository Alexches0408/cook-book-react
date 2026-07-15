import { type IngridientItemProps } from "./IngridientItem.types";

export default function IngridientItem({ingridient, onDelete}:IngridientItemProps){
    return (
        <div>
            <span>{ingridient.productName}</span>
            <button
                onClick={()=> onDelete(ingridient.productId)}
            >
                X
            </button>
        </div>
    )
}
