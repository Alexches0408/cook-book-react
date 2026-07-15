import { type Product } from "@/types/product";

export interface ProductSearchProps {
    onSelect(product:Product):void;
}