export interface DisheImage {
    id:number,
    image: string,
    is_main: boolean,
    order: number,
}

export interface UploadDisheImage {
    dishe:number,
    image: File,
    is_main?: boolean,
    order?: number,
}