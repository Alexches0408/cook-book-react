import { type DisheDetailOnCategory } from "@/types/dishe"
import { div } from "framer-motion/client";

interface DishCardProps {
    dishe:DisheDetailOnCategory;
}

const DisheCard = ({dishe}:DishCardProps) =>{

    return (
        <div 
            className="flex flex-col gap-2"
        >
            {dishe.name}
            <div className="flex flex-row gap-1">
                {dishe.ingridients.map((item)=> (
                    <span
                        key={item.id}
                    >
                        {item.product_name}
                    </span>
                ))}
            </div>
        </div>
    )

}

export default DisheCard