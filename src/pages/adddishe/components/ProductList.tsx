import { useEffect, useState } from "react";

interface Product {
    id?: number;
    name: string;
} 

interface Props {
    onSelect: (product: Product) => void;
}

