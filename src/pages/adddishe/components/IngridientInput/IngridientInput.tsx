import { useState } from "react";

import ProductSearch from "@/components/ProductSearch";
import IngridientForm from "./IngredientForm";

import type { Product } from "@/types/product";
import type { Ingridient } from "@/types/ingridients";

interface IngridientInputProps {
    onAdd: (
        ingridient:Ingridient
    ) => void;
}

const IngredientInput = ({
    onAdd,
}:IngridientInputProps)=>{
    
    const [product, setProduct] = useState<Product | null>(null);

    const handleSave = (
        ingridient: Ingridient
    )=>{
        onAdd(
            ingridient
        );

        setProduct(null);
    }

    const handleCancel = () => {
        setProduct(null);
    }

    return (
        <div>
            {
                !product && (
                    <ProductSearch
                        onSelect={setProduct}
                    />
                )
            }
            {
                product && (
                    <IngridientForm
                        product={product}
                        onSave={handleSave}
                        onCancel={handleCancel}
                    />
                )
            }
        </div>
    )
}

export default IngredientInput