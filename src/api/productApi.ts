import { api } from "./axios";
import type { CreateProduct } from "@/types/product";

export const productApi = {
    create(data: CreateProduct) {
        return api.post(
            "/products/",
            data
        );
    }
};