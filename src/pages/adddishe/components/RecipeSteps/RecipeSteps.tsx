import React, { useState } from "react";
import { type CreateRecipeStep } from "@/types/recipeStep";
import CrossIcon from "@/assets/icons/icon-cross.svg?react"


interface RecipeStepsProps {
    steps: CreateRecipeStep[];
    onChange: (steps: CreateRecipeStep[]) => void;
}

export default function RecipeSteps({steps, onChange}:RecipeStepsProps){
    
    const [step, setStep] = useState("");
    const addStep = (e:React.KeyboardEvent<HTMLInputElement>) => {
        switch (e.key){
            case "Enter":
                e.preventDefault();
                onChange([
                    ...steps,
                    {
                        number:steps.length+1,
                        text:step,
                    },
                ]);
                setStep("");
        }


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
        if (steps.length===1){
            steps=[];
            onChange(steps);
        } else {
            const updated = steps
                .filter((_,i) => i!==number-1)
                .map((step,i)=>({
                    ...step,
                    number:i+1
                }));
            onChange(updated);
        }
    }


    return (
        <div className="w-full flex flex-col gap-2 border-b border-grey5 px-2">
            <div >Рецепт</div>
            <div 
                className="flex flex-col w-5/6 self-center"
            >
                {steps.map((step)=>(
                    <div
                        key={step.number}
                        className="flex flex-row w-full gap-1.5 
                        place-content-between items-start px-2 py-2
                        focus-within:border focus-within:border-grey5
                        focus-within:rounded-2xl"
                    >
                        <span className="align-baseline w-[20px]">{step.number}</span>
                        <textarea
                            value={step.text}
                            onChange={(e)=>{
                                updateStep(step.number, e.target.value)
                            }}
                            rows={1}
                            className="w-full field-sizing-content
                                        focus:border-0 focus:outline-0"
                        />
                        {steps.length > 0 && (
                            <button
                                type="button"
                                onClick={()=>removeStep(step.number)}
                                className="align-top"
                            >
                                <CrossIcon/> 
                            </button>
                        )}
                    </div>
                ))}
            </div>
            <input 
                value={step}
                onChange={(e)=>setStep(e.target.value)}
                multiple
                type="text" 
                placeholder="Введите шаги приготовления блюда"
                onKeyDown={addStep}
                className="w-full py-4 focus:border-0 
                focus:outline-0 focus:font-inter focus:font-normal
                placeholder:font-inter placeholder:font-normal placeholder:text-grey1
                " 
            />
        </div>
    )

}