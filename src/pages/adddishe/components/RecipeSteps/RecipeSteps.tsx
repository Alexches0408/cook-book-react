import { useState } from "react";
import { type CreateRecipeStep } from "@/types/recipeStep";


interface RecipeStepsProps {
    steps: CreateRecipeStep[];
    onChange: (steps: CreateRecipeStep[]) => void;
}

export default function RecipeSteps({steps, onChange}:RecipeStepsProps){
    

    const addStep = () => {


        onChange([
            ...steps,
            {
                number:steps.length+1,
                text:"",
            },
        ])
    }

    const updateStep = (id:number, text:string) => {
        const updated = [...steps]
        updated[id-1]={
            ...updated[id-1],
            text,
        };

        onChange(updated);
    }

    const removeStep = (number:number) => {
        const updated = steps
            .filter((_,i) => i!==number-1)
            .map((step,i)=>({
                ...step,
                number:i+1
            }));
        onChange(updated);
    }


    return (
        <div>
            <div>Рецепт</div>
            {steps.map((step)=>(
                <div
                    key={step.number}
                    className="flex flex-row w-full gap-1.5 place-content-between items-start"
                >
                    <span className="align-baseline">{step.number}</span>
                    <textarea
                        value={step.text}
                        onChange={(e)=>{
                            updateStep(step.number, e.target.value)
                        }}
                        className="w-full"
                    />
                    {steps.length > 1 && (
                        <button
                            type="button"
                            onClick={()=>removeStep(step.number)}
                            className="align-top"
                        >
                            X 
                        </button>
                    )}
                </div>
            ))}
            <button
                type="button"
                onClick={addStep}
            >
                Добавить шаг к рецепту
            </button>
        </div>
    )
        
}