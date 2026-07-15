import { useQuery } from "@tanstack/react-query";
import { disheApi } from "@/api/disheApi";

export function useDishe (id:number) {
    
    return useQuery({
        queryKey: ["dishe", id],

        queryFn: async()=>{
            const response = await disheApi.getById(id);
            return response.data;
        },

        enabled:!!id,
        staleTime: 300000,

    });
}
