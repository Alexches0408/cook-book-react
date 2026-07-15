import { useState, useEffect } from "react";
import { type AddDisheImageProps } from "./AddDisheImage.types";
import disheImage from "@/assets/images/Dishe.png";
import plusIcon from "@/assets/icons/icon-plus.svg";
import plusIconTransp from "@/assets/icons/icon-plus-trancp.svg"

export default function AddDisheImage({image, onchange}:AddDisheImageProps) {
    const [preview, setPreview] = useState<string>(disheImage);

    useEffect(()=>{
        if (!image) {
            setPreview(disheImage);
            return;
        }

        const url = URL.createObjectURL(image);

        setPreview(url);

        return () => URL.revokeObjectURL(url);
    }, [image]);

    return(
        <div className="w-full relative">
            <img
                src={preview}
                alt="Фото блюда"
                className="w-full"
            />  
            <label className="absolute bottom-2 right-2">
                <img src={preview===disheImage?plusIcon:plusIconTransp} alt="Загрузить фото" />
                <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e)=>
                        onchange(
                            e.target.files?.[0]??null
                        )
                    }
                />
            </label>

        </div>
    )

}