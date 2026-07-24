import { useMutation, useQueryClient } from "@tanstack/react-query";
import { productApi } from "@/api/productApi";
import type { UpdateProduct } from "@/types/product";

export function useProductMutations(){

    const queryClient=useQueryClient();

    const createProduct = useMutation({
        mutationFn: async (name:string) =>
        {
            const response = await productApi.create({
                name:name,
            })

            return response.data;
        },

        onSuccess:()=>{
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
        }
    })

    const updateProduct = useMutation({
        mutationFn: ({
            id,
            product
        }:{
            id:number,
            product:Partial<UpdateProduct>
        })=>productApi.update(id,product),

        onSuccess: (response)=>{
            queryClient.invalidateQueries({
                queryKey:["products"],
            })

            queryClient.setQueryData(
                ["product", response.data.id],
                response.data
            )

            
        }
    })

    return {
        createProduct,
        updateProduct,
    }

}