import ProductSearch from "@/components/ProductSearch";
import type { Product } from "@/types/product";


interface ProductInputProps {
    onAdd: (
        ingridient:Product
    ) => void;
}

const IngredientInput = ({
    onAdd,
}:ProductInputProps)=>{
    

    const handleSave = (
        product: Product
    )=>{
        onAdd(
            product
        );

    }

    // const handleCancel = () => {
    //     setProduct(null);
    // }

    return (
        <div
            className="w-full flex flex-col gap-2"
        >
            <ProductSearch
                onSelect={handleSave}
            />
        </div>
    )
}

export default IngredientInput