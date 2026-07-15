import { type Ingridient } from "@/types/ingridients";

export interface IngridientListProps {
    ingridients: Ingridient[];
    onDelete: (id: number) => void;
}
