import { useState } from "react";
import { type IngridientItemProps } from "./IngridientItem.types";
import CrossIcon from "@/assets/icons/icon-cross.svg?react"

export default function IngridientItem({ingridient, onDelete, onChange}:IngridientItemProps){

    const units = [
        "г",
        "кг",
        "мл",
        "л",
        "шт",
        "ч.л.",
        "ст.л.",
    ];


    return (
        <div 
            className="w-full flex gap-2 px-2 py-4 border border-grey6 rounded-2xl"
        >
            <div className="w-3/5">
                {ingridient.productName}
            </div>
            <input 
                type="number" 
                value={ingridient.quantity}
                onChange={(e)=>
                    onChange({
                        ...ingridient,
                        quantity:Number(e.target.value)
                    })
                }
                className="flex-1 min-w-0 text-right"
                // placeholder="Количество"
            />
            <select 
                value={ingridient.unit}    

                onChange={(e)=>
                    onChange({
                        ...ingridient,
                        unit:e.target.value
                    })
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
                    onClick={()=>onDelete(ingridient.productId)}
                    className=""
                >
                    <CrossIcon/>
                </button>
        </div>
    )
}
