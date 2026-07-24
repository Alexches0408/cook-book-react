import { Link } from "react-router-dom"
import ListIcon from "@/assets/icons/list-icon.svg?react"
import ListActiveIcon from "@/assets/icons/list-active-icon.svg?react"

const ListPurchaseLink = ({pathname}) => {

    return (
        <Link to="/list-purchase/">
            <div className="flex flex-col items-center gap-1">
                {pathname==="/list-purchase/"?<ListActiveIcon/>:<ListIcon/>}
                <div className="text-center text-[11px] leading-3.25 font-medium">Список покупок</div>
            </div>
        </Link>
    )
}

export default ListPurchaseLink