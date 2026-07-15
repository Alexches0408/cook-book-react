import { type Category } from "@/types/category";

export async function searchCategories() : Promise<Category[]> {
    const response = await fetch(`http://127.0.0.1:8000/api/categories/`);
    if (!response.ok) {
        throw new Error("Ошибка поиска категорий");
    }
    return response.json();
}