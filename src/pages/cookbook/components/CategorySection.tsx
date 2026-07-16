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
                    <span>
                        {dishe.name}
                    </span>
                    <DisheCardList
                        key={dishe.id}
                        dishes={dishe.dishes}
                    />
                </div>
            ))}
        </div>
    )

}

export default CategorySection;