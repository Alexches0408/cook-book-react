import { useQuery } from "@tanstack/react-query";
import { disheApi } from "@/api/disheApi";

export function useDishes () {
    return useQuery({
        queryKey:["dishes"],

        queryFn: async()=>{
            const response = await disheApi.getAll()
            return response.data
        },

        staleTime:300000,
    })
}