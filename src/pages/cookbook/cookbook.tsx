import { Link } from "react-router-dom";
import { useState } from "react";
import Search from "@/components/search";
import Category from "@/components/category";
import CategorySection from "./components/CategorySection";
import { useCategories } from "@/hooks/useCategories";
import { useDishesOnCategory } from "@/hooks/useDishesOnCategory";

import PlusIcon from "@/assets/icons/icon-plus.svg?react"


const Cookbook = () => {
  const [category, setCategory] = useState(0);
  const categories = useCategories();
  const { data: dishes = [] } = useDishesOnCategory();
  const selectedCategory = !category ? categories:categories.filter(item=>item.id===category)
  

  const handleCategory =(id:number)=>{
      setCategory(id);
  }

  return (
    <div>
      <div
        className="flex flex-col h-screen w-full bg-cover bg-center px-4 py-6 gap-3"
      >
        <Search/>
        <Category
          category={category}
          categories={categories}
          onChange={handleCategory}
         />
         <CategorySection
            selectedCategory={selectedCategory}
            dishes={dishes}
          />
      </div>
      <div>

      </div>
      <div
        className="absolute bottom-5 right-4"
      >
        <Link to="/adddishe">
          <PlusIcon/>
        </Link>
      </div>
    </div>
  );
};

export default Cookbook;