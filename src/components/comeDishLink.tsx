import { Link } from "react-router-dom"
import ComeDishIcon from "@/assets/icons/tablewear-icon.svg?react"
import ActiveComeDishIcon from "@/assets/icons/tablewear-active-icon.svg"

const ComeDishLink = ({pathname}) => {

    return (
        <Link to="/comedish/">
            <div className="flex flex-col items-center gap-1">
                {pathname==="/comedish/"?<ActiveComeDishIcon/>:<ComeDishIcon/>}
                <div className="text-center text-[11px] leading-3.25 font-medium">Придумать блюдо</div>
            </div>
        </Link>
    )
}

export default ComeDishLink