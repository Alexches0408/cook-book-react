import { Routes, Route } from "react-router-dom";
import Cookbook from "@/pages/cookbook/cookbook"; 
import AddDishe from "@/pages/adddishe/adddishe";

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Cookbook />} />
        <Route path="/adddishe" element={<AddDishe />} />
      </Routes>
    </>
  )
}

export default App
