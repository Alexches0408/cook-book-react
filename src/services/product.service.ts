import { type Product } from "@/types/product";

export async function searchProducts(query: string): Promise<Product[]> {
    const response = await fetch(
        `http://127.0.0.1:8000/api/products?search=${encodeURIComponent(query)}`
    );

    if (!response.ok) {
        throw new Error("Ошибка поиска");
    }


    return response.json();
}