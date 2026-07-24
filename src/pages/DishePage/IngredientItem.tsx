import { useProducts } from "@/hooks/useProducts"
import { useProductMutations } from "@/hooks/useProductMutations"

import type { Ingridient } from "@/types/ingridients"
import CustomCheckBox from "@/components/customCheckBox"

interface IngridientItemWithCheckProps {
    ingridient:Ingridient
}

const IngridientItemWithCheck = ({ingridient}:IngridientItemWithCheckProps) => {
    const {data:allproducts = [], isLoading,isError} = useProducts();
    const {updateProduct,}=useProductMutations();
    if (isLoading) return <div>Загрузка...</div>
    if (isError) return <div>Ошибка получения списка продуктов...</div>

    const selected = allproducts
                        .filter(product=>product.inStock)
                        .map(product=>product.id)

    const toggleIngridient = (productId:number) => {

        updateProduct.mutateAsync({
            id:productId,
            product:{
                inStock:!selected.includes(productId)
            }
        })
    }

    return (
        <div
            key={ingridient.id}
            className="flex gap-2 items-center"
        >   
            <CustomCheckBox
                checked={selected.includes(ingridient.product)}
                onChange={() => toggleIngridient(ingridient.product)}
            />
            {ingridient.product_name}   
        </div>
    )
}

export default IngridientItemWithCheck;