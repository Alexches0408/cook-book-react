import type { Product } from "@/types/product"

export interface ProductFilterProps {
    onSelect(product:Product):void
}