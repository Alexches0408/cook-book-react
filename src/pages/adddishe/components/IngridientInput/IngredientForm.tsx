import { useState } from "react";

import type { Product } from "@/types/product";
import type { Ingridient } from "@/types/ingridients";
import CrossIcon from "@/assets/icons/icon-cross.svg?react"

interface IngridientFormProps {
    product: Product,
    onSave: (
        ingridient:Ingridient
    )=>void;

    onCancel: ()=>void;
        
}

const units = [
    "г",
    "кг",
    "мл",
    "л",
    "шт",
    "ч.л.",
    "ст.л.",
];

const IngridientForm = ({
    product,
    onSave,
    onCancel,
}: IngridientFormProps)=>{

    const [quantity, setQuantity] = useState<string>("1")
    const [unit, setUnit] = useState<string>("г")

    const handleSave =()=> {
        const value = Number(quantity)

        if (!value || value <=0) {
            return;
        }

        onSave({
            productId:product.id,
            productName:product.name,
            quantity:value,
            unit,
            order:0,
        });

        setQuantity("1");
        setUnit("г");
    }

    return (
        <div 
            className="w-full flex gap-2 px-2 py-4 border border-grey6 rounded-2xl"
        >
            <div className="w-3/5">
                {product.name}
            </div>
            <input 
                type="number" 
                value={quantity}
                onChange={(e)=>
                    setQuantity(
                        e.target.value
                    )
                }
                className="flex-1 min-w-0 text-right"
                // placeholder="Количество"
            />
            <select 
                value={unit}    

                onChange={(e)=>
                    setUnit(e.target.value)
                }
                className="flex-1 min-w-0"
            >
                {
                    units.map(item=>
                        <option
                            key={item}
                            value={item}
                        >
                            {item}
                        </option>
                    )
                }
            </select>
            {/* <button
                type="button"
                onClick={handleSave}
                className="flex-1 min-w-0"
            >
                Добавить ингридиент
            </button> */}
            <button
                    type="button"
                    onClick={onCancel}
                    className=""
                >
                    <CrossIcon/>
                </button>
        </div>
    )
}

export default IngridientForm
