import { type DisheDetailOnCategory } from "@/types/dishe"
import DisheImage from "@/assets/images/DisheCard.jpg"


interface DishCardProps {
    dishe:DisheDetailOnCategory;
}

const DisheCard = ({dishe}:DishCardProps) =>{

    return (
        <div 
            className="flex items-end bg-cover bg-center bg-no-repeat w-full h-full rounded-2xl"
            style={{ backgroundImage:`url(${dishe.images[0] ? dishe.images[0].image:DisheImage})`}}
        >   
            <div
                className="h-1/3 flex flex-col px-2 text-white"
            >
                <span>{dishe.name}</span>
                <div className="flex flex-row gap-1">
                    {dishe.ingridients.map((item)=> (
                        <span
                            key={item.id}
                            className="min-w-0"
                        >
                            {item.product_name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )

}

export default DisheCard