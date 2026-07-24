export interface Product {
    id: number;
    name: string;
    inStock?:boolean;
    inList?:boolean;
}

export interface CreateProduct {
    name:string,
}

export interface UpdateProduct {
    name?: string;
    inStock?:boolean;
    inList?:boolean;
}
