import { Link } from "react-router-dom"
import LeftArrowIcon from "@/assets/icons/arrow-left.svg?react"


const BackArrow =()=>{
    return(
        <Link to="/">
            <div className="flex flex-row items-center">
                <LeftArrowIcon/>
                <span className="font-bold ml-2">Назад</span>
            </div>
        </Link>
    )
};

export default BackArrow;
