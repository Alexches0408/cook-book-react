import { Outlet } from "react-router-dom"
import Footer from "./footer"

const MainLayOut = ()=>{

    
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
};

export default MainLayOut;