import {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
  } from "@headlessui/react";


import ArrowDownIcon from "@/assets/icons/arrow-down.svg?react"

const Category = ({categories,category, onChange}) => {


    const selected = categories.find((c)=>c.id===category)??null;

    return (
        <Listbox
            value={selected}
            by="id"
            onChange={(value)=>{
                onChange(value.id)
            }}
        >
            <div className="w-full border-b border-grey6">
                <ListboxButton
                    className={`
                        flex items-center justify-between w-full h-14 
                        px-2 py-4
                        bg-transparent
                        appearance-none
                        focus:border-0
                        focus:outline-0    
                        ${category ? "" : "text-grey2"}
                    `}
                >
                    <span
                        className="text-[17px]"
                    >
                        {selected?.name ?? "Категория"}
                    </span>
                    <ArrowDownIcon/>
                </ListboxButton>
                <ListboxOptions
                    className="
                        focus:border-0
                        focus:outline-0

                    "
                >
                    {categories.map((category)=>(
                        <ListboxOption
                            key={category.id}
                            value={category}
                            className={({ focus, selected }) =>
                            `    font-black                 
                                ${focus? "bg-grey6":""}
                                ${selected?"bg-grey5":""}
                                text-[17px]
                                font-normal
                                px-2 py-2
                            `
                            }
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