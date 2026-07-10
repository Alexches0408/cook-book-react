import { Link } from "react-router-dom";
import Search from "@/components/search";
import Category from "@/components/category";
import PlusIcon from "@/assets/icons/icon-plus.svg?react"

const Cookbook = () => {
  return (
    <div>
      <div
        className="flex flex-col h-screen w-full bg-cover bg-center px-4 py-6 gap-3"
      >
        <Search/>
        <Category />
      </div>
      <div></div>
      <div
        className="absolute bottom-5 right-4"
      >
        <Link to="/adddishe">
          <PlusIcon/>
        </Link>
      </div>
    </div>
  );
};

export default Cookbook;