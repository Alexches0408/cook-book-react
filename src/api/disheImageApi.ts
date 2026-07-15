import { api } from "./axios";
import type { UploadDisheImage } from "@/types/disheImage";

export const disheImageApi = {

    create(data: UploadDisheImage) {

        const formData = new FormData();

        formData.append(
            "dishe",
            data.dishe.toString()
        );

        formData.append(
            "image",
            data.image
        );



        return api.post(
            "/dishe-images/", 
            formData,
            {
                headers:{
                    "Content-Type":
                    "multipart/form-data"
                }
            }
        );
    }
};