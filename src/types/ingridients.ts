export interface Ingridient{
    id?:number,
    product:number,
    product_name:string,
    product_inStock?:boolean,
    product_inList?:boolean,
    quantity?:number,
    unit?:string,
    order?:number,
}

export interface CreateIngridient{
    dishe:number,
    product:number,
    product_name?:string,
    quantity?:number,
    unit?:string,
    order?:number,
}