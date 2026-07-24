import { Link } from "react-router-dom";
import type { DisheDetailOnCategory } from "@/types/dishe";
import DisheCard from "./DisheCard";

interface DisheCardListProps {
    dishes:DisheDetailOnCategory[]
}


const DisheCardList = ({dishes}:DisheCardListProps) =>{

        
    return(
        <div
            className="flex flex-row flex-wrap gap-4 justify-between" 
        >
            {dishes.map((dishe)=>
                
                    <div
                        key={dishe.id}
                        className="w-[calc(50%-1rem)] aspect-square"
                    >
                        <Link to={`/dishe/${dishe.id}/`}>
                            <DisheCard
                                dishe={dishe}
                            />
                        </Link>
                    </div>                                
            )}
        </div>
    )
}

export default DisheCardList