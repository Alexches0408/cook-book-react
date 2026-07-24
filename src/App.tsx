import { Routes, Route } from "react-router-dom";
import Cookbook from "@/pages/cookbook/cookbook"; 
import AddDishe from "@/pages/adddishe/adddishe";
import DishePage from "./pages/DishePage/DishePage";
import MainLayOut from "./components/mainLayOut";
import ListPurchase from "./pages/listpurchase/listPurchase";


function App() {


  return (
    <>
      <Routes>
        <Route element={<MainLayOut/>}>
          <Route path="/" element={<Cookbook />} />
          <Route path="/list-purchase" element={<ListPurchase />} />
        </Route>
        <Route path="/adddishe" element={<AddDishe />} />
        <Route path="/dishe/:id" element={<DishePage/>}/>
      </Routes>
    </>
  )
}

export default App
