import {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
  } from "@headlessui/react";

import { type Category } from "@/types/category";
import { useCategories } from "@/hooks/useCategories";

const Category = ({category, onChange}) => {

    const categories = useCategories();

    const selected = categories.find((c)=>c.id===category)??null;

    return (
        <Listbox
            value={selected}
            onChange={(value)=>{
                onChange(value)
            }}
        >
            <div className="w-full">
                <ListboxButton
                    className={`
                        flex items-center w-full h-14 
                        border-b border-grey6 px-2 py-4
                        bg-transparent
                        appearance-none    
                        focus:border-0
                        focus:outline-0
                        ${category ? "" : "text-grey2"}
                    `}
                >
                    <span

                    >
                        {selected?.name ?? "Категория"}
                    </span>
                </ListboxButton>
                <ListboxOptions>
                    {categories.map((category)=>(
                        <ListboxOption
                            key={category.id}
                            value={category.id}
                            className="font-black"
                        >
                                {category.name}
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </div>
        </Listbox>
    );
};

export default Category;