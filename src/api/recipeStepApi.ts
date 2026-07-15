import { api } from "./axios";
import type { CreateRecipeStep } from "@/types/recipeStep";

export const recipeStepApi = {
    create(data: CreateRecipeStep) {
        return api.post(
            "/recipe-steps/", data
        );
    }

};
