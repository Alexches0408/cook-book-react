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
    ingridients:Ingridient[],
    category:number,
    cooking_time:number,
    main_image:string | null,
    number_of_persons:number,

}

export interface ImgesOnCategory {
    id:number,
    image:string,
}

export interface IngridientsOnCategory {
    id:number,
    product:number,
    product_name:string,
}

export interface DisheDetailOnCategory {
    id:number,
    name:string,
    images:ImgesOnCategory[],
    ingridients:IngridientsOnCategory[],
}

export interface DisheListOnCategory {
    id:number,
    name:string,
    dishes:DisheDetailOnCategory[],
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