import { Link } from "react-router-dom";
import { useState } from "react";
import Category from "@/components/category";
import ProductInput from "./components/ProductInput/ProductInput";
import {type Product} from "@/types/product";
import LeftArrowIcon from "@/assets/icons/arrow-left.svg?react";

const AddDishe = () => {

  const [products, setProducts] = useState<Product[]>([]);
  const handleAddProduct = (product: Product) => {
    setProducts([...products, product]);
  }

  return (
    <div className="px-3 py-4">
      <div className="flex flex-row items-center justify-between">
        <Link to="/">
            <div className="flex flex-row items-center">
                <LeftArrowIcon/>
                <span className="font-bold ml-2">Назад</span>
            </div>
        </Link>
        <div>Добавление блюда</div>
        <div>Иконки</div>
      </div>
      <div
        className="flex flex-col h-screen w-full bg-cover bg-center px-4 py-6 gap-3"
      >
        <div>
            <span>Название блюда</span>
            <input type="text" className="w-full border rounded-md p-2 mt-1"/>
        </div>
        <Category />
        <ProductInput onSelect={handleAddProduct}/>
      </div>
      <div></div>
    </div>
  );
};

export default AddDishe;