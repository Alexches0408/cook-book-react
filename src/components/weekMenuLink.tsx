import { Link } from "react-router-dom";
import MenuIcon from "@/assets/icons/menu-icon.svg?react";
import MenuActiveIcon from "@/assets/icons/menu-active-icon.svg?react";

const WeekMenuLink = ({pathname}) => {

    return (
        <Link to="/week-menu/">
            <div className="flex flex-col items-center gap-1">
                {pathname==="/week-menu/"?<MenuActiveIcon/>:<MenuIcon/>}
                <div className="text-center text-[11px] leading-3.25 font-medium">Meню на неделю</div>
            </div>
        </Link>
    )
}

export default WeekMenuLink