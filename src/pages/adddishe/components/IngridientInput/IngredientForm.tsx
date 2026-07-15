import { useState } from "react";

import type { Product } from "@/types/product";
import type { Ingridient } from "@/types/ingridients";
import { div } from "framer-motion/client";

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

    const [quantity, setQuantity] = useState<string>("")
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

        setQuantity("");
        setUnit("г");
    }

    return (
        <div>
            <div>
                <span>
                    {product.name}
                </span>
                <button
                    type="button"
                    onClick={onCancel}
                >
                    X
                </button>
            </div>
            <div>
                <input 
                    type="number" 
                    value={quantity}

                    onChange={(e)=>
                        setQuantity(
                            e.target.value
                        )
                    }
                    placeholder="Количество"
                />
            </div>
            <div>
                <select 
                    value={unit}    

                    onChange={(e)=>
                        setUnit(e.target.value)
                    }
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
            </div>
            <button
                type="button"
                onClick={handleSave}
            >
                Добавить ингридиент
            </button>
        </div>
    )
}

export default IngridientForm
