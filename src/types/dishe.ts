import type { DisheImage } from "./disheImage"
import type { Ingridient } from "./ingridients"
import type { RecipeStep } from "./recipeStep"


export interface Dishe {
    id:number,
    name:string,
    description?:string,
    category:number,
    number_of_persons:number,
    cooking_time:number,
    created_at:string,
    updated_at:string,
    steps:RecipeStep[],
    images:DisheImage[],
    ingridients:Ingridient[],
}

export interface DisheList {
    id:number,
    name:string,
    steps:RecipeStep[],
    category:number,
    cooking_time:number,
    main_image:string | null,
    number_of_persons:number,

}

export interface CreateDishe {
    name:string,
    description?:string,
    category:number,
    number_of_persons?:number,
    cooking_time?:number,
}

export interface UpdateDishe {
    name?:string,
    description?:string,
    category?:number,
    number_of_persons?:number,
    cooking_time?:number,
}



export interface DisheFormData {
    name: string,
    category: number | null,
    description:string,
    cooking_time:number,
    number_of_persons:number,
    image: File | null,
    ingridients: Ingridient[],
    steps:{
        number:number,
        text:string
    }[],
}