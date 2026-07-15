export interface Ingridient{
    productId:number,
    productName:string,
    quantity?:number,
    unit?:string,
    order?:number,
}

export interface CreateIngridient{
    dishe:number,
    product:number,
    quantity?:number,
    unit?:string,
    order?:number,
}