import { useQuery } from "@tanstack/react-query";
import { disheApi } from "@/api/disheApi";

export function useDishesOnCategory () {
    return useQuery({
        queryKey:["dishes-on-category"],

        queryFn: async()=>{
            const response = await disheApi.getAllOnCategory()
            return response.data
        },

        staleTime:300000,
    })
}