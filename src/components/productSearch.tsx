import { useEffect, useRef, useState } from "react";

import { type ProductSearchProps } from "@/types/ProductSearch";
import { type Product } from "@/types/product";

import {searchProducts, addProduct} from "@/services/product.service";


const ProductSearch = ({onSelect}: ProductSearchProps) => {
    const [query, setQuery] = useState("");
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(()=>{
        if (query.trim().length < 2) {
            setProducts([]);
            setIsOpen(false);
            return;
        }

        const timer = setTimeout(async () => {
            try {
                setIsLoading(true);

                const results = await searchProducts(query);

                setProducts(results);
                setIsOpen(true);
            } catch (error) {
                console.error("Ошибка поиска продуктов:", error);   
            } finally {
                setIsLoading(false);
            }
    }, 300)
    return () => clearTimeout(timer);

    }, [query]);

    const handleSelect = (product: Product) => {
        onSelect(product);

        setQuery("");
        setProducts([]);
        setIsOpen(false);
        setSelectedIndex(-1);

        inputRef.current?.focus();

    };

    const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        switch (e.key) {
            case "ArrowDown":
                e.preventDefault();
                setSelectedIndex(prev => prev < products.length-1 ? prev + 1 : prev);
                break;

            case "ArrowUp":
                e.preventDefault();
                setSelectedIndex(prev => prev > -1 ? prev - 1 : -1);
                break;
            case "Enter":
                e.preventDefault();

                if (selectedIndex >= 0 ){
                    handleSelect(products[selectedIndex]);
                    return
                }

                const value = query.trim();

                if (!value) return;
        
                const found= products.find((product) => product.name.toLowerCase() === value.toLowerCase());
        
                if (found) {
                    handleSelect(found);
                    return
                }
        
                const created = await addProduct(value);
        
                onSelect(created);
        
                setQuery("");
                setProducts([]);
                setSelectedIndex(-1);
        }
    }

    
            

    return (
        <div 
            className={`${isOpen?"border border-grey6 rounded-2xl":""}`}
        >
            <input 
                ref={inputRef}
                value={query}
                placeholder="Название ингридиента..."
                onChange={(e) => {
                    setQuery(e.target.value)
                }}
                onKeyDown={handleKeyDown}
                className={`w-full px-2 py-4 
                ${!isOpen?"border border-grey6 rounded-2xl focus:outline-0 focus:border focus:border-grey6":"border-0 focus:border-0 focus:outline-0"}
                text-[17px] placeholder:text-[17px] placeholder:font-inter 
                placeholder:font-normal placeholder:text-grey2`}
            />

            {isLoading && (<div>Поиск...</div>)}

            {isOpen && products.length > 0 && (
                <>
                    <ul>
                        {products.map((product, index) => (
                            <li 
                                key={product.id} 
                                onClick={() => handleSelect(product)}
                                className={`
                                    px-2 py-3 rounded-2xl
                                    ${index === selectedIndex
                                        ? "bg-grey6 cursor-pointer"
                                        : "cursor-pointer hover:bg-grey6"}
                                        `
                                }
                            >
                                {product.name}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    )
}

export default ProductSearch;