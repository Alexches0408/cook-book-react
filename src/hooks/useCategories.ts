import { useEffect, useState } from "react";
import { type Category } from "@/types/category";
import { searchCategories } from "@/services/category.service";

export function useCategories(){
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(()=> {
        searchCategories().then(setCategories);
    },[]);

    return categories;
}