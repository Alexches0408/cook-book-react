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

export async function addProduct(query: string): Promise<Product> {
    const response = await fetch(
        `http://127.0.0.1:8000/api/products/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: query }),
        });

    if (!response.ok) {
        throw new Error("Ошибка добавления продукта");
    }
    return response.json();
}