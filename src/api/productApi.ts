import { api } from "./axios";
import type { CreateProduct, UpdateProduct, Product } from "@/types/product";

export const productApi = {
    create(data: CreateProduct) {
        return api.post(
            "/products/",
            data
        );
    },
    getAll() {
        return api.get<Product[]>("/products/");
    },
    update(id:number, product:Partial<UpdateProduct>) {
        return api.patch<Product>(`/products/${id}/`, product)
    }
};