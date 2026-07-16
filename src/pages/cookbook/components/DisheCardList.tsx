import type { DisheDetailOnCategory } from "@/types/dishe";
import DisheCard from "./DisheCard";

interface DisheCardListProps {
    dishes:DisheDetailOnCategory[]
}


const DisheCardList = ({dishes}:DisheCardListProps) =>{

        
    return(
        <div>
            {dishes.map((dishe)=>
                <div
                    key={dishe.id}
                >
                    <DisheCard
                        dishe={dishe}
                    />
                </div>                    
            )}
        </div>
    )
}

export default DisheCardList