import { api } from "./axios";
import { type Ingridient, type CreateIngridient } from "@/types/ingridients";

export const ingridientApi = {
    create(data: CreateIngridient) {
        return api.post<Ingridient>(
            "/dishe-products/", data
        );
    }
};