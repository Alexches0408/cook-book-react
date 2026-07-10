import { type Product } from "@/types/product";

export interface ProductInputProps {
    onSelect: (product: Product) => void;
}