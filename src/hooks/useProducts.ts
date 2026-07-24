import { useQuery } from "@tanstack/react-query";
import { productApi } from "@/api/productApi";

export function useProducts () {
    return useQuery({
        queryKey:["products"],

        queryFn:async()=>{
            const response = await productApi.getAll();
            return response.data
        },

        staleTime:300000,
    })
    

}