import { Link } from "react-router-dom"
import BookIcon from "@/assets/icons/book-icon.svg?react"
import ActiveBookIcon from "@/assets/icons/book-icon-active.svg?react"

const DisheBookLink = ({pathname}) => {

    return (
        <Link to="/">
            <div className="flex flex-col items-center gap-1">
                {pathname==="/"?<ActiveBookIcon/>:<BookIcon/>}
                <div className="text-center text-[11px] leading-3.25 font-medium">Книга рецептов</div>
            </div>
        </Link>
    )
}

export default DisheBookLink