import { api } from "./axios";
import type { CreateIngridient } from "@/types/ingridients";

export const ingridientApi = {
    create(data: CreateIngridient) {
        return api.post(
            "/dishe-products/", data
        );
    }
};