import { type CategoryProps } from "@/types/category";
import type { DisheListOnCategory } from "@/types/dishe";
import DisheCardList from "./DisheCardList";

interface CategorySectionProps {
    selectedCategory:CategoryProps[];
    dishes:DisheListOnCategory[];
}


const CategorySection = ({selectedCategory, dishes}:CategorySectionProps) =>{

    const selectedDishes = dishes
    .filter(category =>
        selectedCategory.some(
            selected => selected.id === category.id
        )
    )

    return (
        <div>
            {selectedDishes.map((dishe)=>(
                <div
                    key={dishe.id}
                >
                    <h2
                        className="text-[22px] font-bold"
                    >
                        {dishe.name}
                    </h2>
                    <DisheCardList
                        key={dishe.id}
                        dishes={dishe.dishes}
                    />
                </div>
            ))}
            <div    
                className="min-h-[10%]"
            ></div>
        </div>
    )

}

export default CategorySection;