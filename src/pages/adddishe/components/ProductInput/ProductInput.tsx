import { useEffect, useRef, useState } from "react";

import {type Product} from "@/types/product";
import {type ProductInputProps} from "./ProductInput.types";

import {searchProducts} from "@/services/product.service";


const ProductInput = ({onSelect}: ProductInputProps) => {
    const [query, setQuery] = useState("");
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

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

        inputRef.current?.focus();

    };

    return (
        <div>
            <input 
                ref={inputRef}
                value={query}
                placeholder="Название ингридиента..."
                onChange={(e) => {
                    setQuery(e.target.value)
                }}
            />

            {isLoading && (<div>Поиск...</div>)}

            {isOpen && products.length > 0 && (
                <>
                    <div>Результаты поиска:</div>
                    <ul>
                        {products.map((product) => (
                            <li 
                                key={product.id} 
                                onClick={() => handleSelect(product)}
                            >
                                {product.name}
                            </li>
                        ))}
                    </ul>
                </>
            )}

{
                isOpen &&
                !isLoading &&
                products.length === 0 &&
                query.length >= 2 &&
                (
                    <div className="absolute mt-1 w-full rounded-lg border bg-white p-3">

                        Ничего не найдено

                    </div>
                )
            }


        </div>
    )
}

export default ProductInput;