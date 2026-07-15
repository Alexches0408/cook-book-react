import { useMutation, useQueryClient } from "@tanstack/react-query";

import { disheApi } from "@/api/disheApi";

import type { CreateDishe, UpdateDishe } from "@/types/dishe";

import { disheImageApi } from "@/api/disheImageApi";
import { ingridientApi } from "@/api/ingridientApi";
import { recipeStepApi } from "@/api/recipeStepApi";

import { type DisheFormData } from "@/types/dishe";


export function useDisheMutations(){
    const queryClient=useQueryClient();


    const updateDishe = useMutation({
        mutationFn: ({
            id,
            dishe,
        }:{
            id:number,
            dishe:UpdateDishe
        }) => disheApi.update(id,dishe),

        onSuccess: (response)=>{
            queryClient.invalidateQueries({
                queryKey:["dishes"],
            });

            queryClient.setQueryData(
                ["dishe", response.data.id],
                response.data
            );
        }
    });

    const deleteDishe = useMutation({
        mutationFn: (id:number)=>
            disheApi.delete(id),

        onSuccess: (_,id)=>{
            queryClient.invalidateQueries({
                queryKey:["dishes"],
            });

            queryClient.removeQueries({
                queryKey:["dishe",id]
            });
        }
    });

    const createFullDishe = useMutation({
        mutationFn: async (
            data: DisheFormData
        )=>{
            
            const response = await disheApi.create({
                name:data.name,
                category:data.category,
                description:data.description,
                cooking_time:data.cooking_time,
                number_of_persons:data.number_of_persons,
            });

            const disheId=response.data.id;

            await Promise.all(
                    data.ingridients.map(ingridient=>
                        ingridientApi.create({
                            dishe:disheId,
                            product:ingridient.productId,
                            quantity:ingridient.quantity,
                            unit:ingridient.unit,
                        })
                    )
            );

            await Promise.all(
                data.steps.map(step=>
                    recipeStepApi.create({
                        dishe:disheId,
                        number:step.number,
                        text:step.text,
                    })
                )
            );

            if (data.image) {
                await disheImageApi.create({
                    dishe:disheId,
                    image: data.image
                })
            }

            return response.data
        },

        onSuccess:(dishe)=>{

            queryClient.invalidateQueries({
                queryKey:["dishes"]
            });

            queryClient.setQueryData(
                ["dishe", dishe.id],
                dishe
            )
        }

           

    })

    return {
        createFullDishe,
        updateDishe,
        deleteDishe,
    }
}
