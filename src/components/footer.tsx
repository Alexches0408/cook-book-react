import { useLocation } from "react-router-dom";
import DisheBookLink from "./disheBookLink";
import ComeDishLink from "./comeDishLink";
import ListPurchaseLink from "./listPurachesLink";
import WeekMenuLink from "./weekMenuLink";

const Footer = () => {

    const { pathname } = useLocation();

    return (
        <footer className="fixed bottom-0 left-0 right-0 w-full h-1/10 flex flex-row gap-3 items-center justify-around bg-grey6 px-4">
            <DisheBookLink pathname={pathname}/>
            <ComeDishLink pathname={pathname}/>
            <ListPurchaseLink pathname={pathname}/>
            <WeekMenuLink pathname={pathname}/>
        </footer>
    )
};

export default Footer;