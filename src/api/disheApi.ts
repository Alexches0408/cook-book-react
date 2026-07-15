import { api } from "./axios";
import type { Dishe, DisheList, CreateDishe, UpdateDishe } from "@/types/dishe";

export const disheApi = {
    getAll() {
        return api.get<DisheList[]>("/dishes/");
    },

    getById(id:number) {
        return api.get<Dishe>(`/dishes/${id}/`);
    },

    create(dishe:Partial<CreateDishe>) {
        return api.post<CreateDishe>("/dishes/",dishe)
    },

    update(id:number, dishe:Partial<UpdateDishe>) {
        return api.post<Dishe>(`/dishes/${id}/`, dishe)
    },

    delete(id:number){
        return api.delete(`/dishes/${id}/`)
    }
}


