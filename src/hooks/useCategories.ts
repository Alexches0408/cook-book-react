import { useEffect, useState } from "react";
import { type CategoryProps } from "@/types/category";
import { searchCategories } from "@/services/category.service";

export function useCategories(){
    const [categories, setCategories] = useState<CategoryProps[]>([]);

    useEffect(()=> {
        searchCategories().then(setCategories);
    },[]);

    return categories;
}