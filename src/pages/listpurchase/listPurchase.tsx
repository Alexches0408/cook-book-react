import { useState, useEffect, useRef } from "react";
import ProductFilter from "@/components/productFilter";
import { useProducts } from "@/hooks/useProducts";
import type { Product } from "@/types/product";
import { useProductMutations } from "@/hooks/useProductMutations";
import PurchaseItem from "./components/purchaseItem";
import { AnimatePresence } from "framer-motion";

const ListPurchase = () => {
    const {data: allproducts = [], isLoading, isError} = useProducts();
    const {updateProduct,} = useProductMutations();

    if (isLoading) return <div>Загрузка...</div>
    if (isError) return <div>Ошибка загрузки данных</div>
    const selectedIds = allproducts
        .filter(product => product.inStock)
        .map(product => product.id);


    const listItems = allproducts
        .filter(product=>product.inList)
        .map(product => product.id)


    const selProducts = allproducts.filter(item =>
        listItems.includes(item.id)
    );

   

    const toggleIngridient = (productId:number) => {

        updateProduct.mutateAsync({
            id:productId,
            product:{
                inStock:!selectedIds.includes(productId)
            }
        })
    }

    const handleSelect = (product:Product) => {
         updateProduct.mutateAsync({
            id:product.id,
            product:{
                inList:true
            }
         })
        
    }

    const removeFromList = (productId) => {
        updateProduct.mutateAsync({
            id:productId,
            product:{
                inList:false
            }
        })
    }


    return(
        <div
            className="px-4 py-4 flex flex-col gap-2"
        >
            <h1
                className="self-center text-[22px] font-bold"
            >
                Список покупок
            </h1>
            <ProductFilter
                onSelect={handleSelect}
            />
            <div
                className="flex flex-col gap-1"
            >
                <AnimatePresence>
                    {selProducts
                    .map((product)=>(                    
                        <PurchaseItem
                            key={product.id}
                            product={product}
                            checked={selectedIds.includes(product.id)}
                            onToggle={()=>toggleIngridient(product.id)}
                            onRemove={()=>removeFromList(product.id)}
                        />                    
                    ))}
                </AnimatePresence>
            </div>
        </div>
    )
};

export default ListPurchase;