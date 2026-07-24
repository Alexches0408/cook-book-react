import { useParams } from "react-router-dom";
import IngridientItemWithCheck from "./IngredientItem";
import { useDishe } from "@/hooks/useDishe";

import BackArrow from "@/components/backArrow";
import disheImage from "@/assets/images/Dishe.png";
import PlusIcon from "@/assets/icons/icon-plus-dishe.svg?react"


const DishePage = () => {

    const {id} = useParams();
    const disheId = Number(id)

    const { data: disheData, isLoading, isError, } = useDishe(disheId);
    if (isLoading) return <div>Загрузка...</div>
    if (isError) return <div>Ошибка загрузки данных</div>




    return(
        <div
            className="w-full px-5 py-5"
        >
            <div
                className="w-full mb-4 flex flex-row justify-between"
            >
                <BackArrow/>
                <span className="text-[13px] text-gre1">{disheData.name}</span>
            </div>
            <div
                className="flex flex-col gap-2"
            >
                <img
                    src={disheData.images[0]?disheData.images[0].image : disheImage}
                    alt="Фото блюда"
                    className="w-full rounded-2xl"
                /> 
                <div className="flex flex-col gap-2">
                    {disheData.ingridients.map((ingridient)=>(
                        <IngridientItemWithCheck
                            key={ingridient.id}
                            ingridient={ingridient}
                        />
                    ))}
                </div>
                <div
                    className="flex flex-row items-center"
                >
                    <div
                        className="flex-3 text-[11px] text-gre1"
                    >
                        Добавить в список покупок не отмеченные ингридиенты
                    </div>
                    <button
                        className="flex flex-row justify-center gap-2 items-center flex-2 text-primary border rounded-2xl text-[17px] font-bold py-2 px-4"
                    >
                        <PlusIcon/>
                        <span> Добавить</span>
                    </button>
                </div>
                <div 
                    className="mt-5 flex flex-col px-2 gap-2"
                >
                    <span className="text-gre1 text-[15px]">
                        Рецепт
                    </span>
                    {disheData.steps.map((step)=>(
                        <div
                            key={step.id}
                            className="text-[17px] flex flex-row gap-2"
                        >
                            <span>
                                {step.number}.
                            </span>
                            <span>
                                {step.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DishePage;