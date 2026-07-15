import { type Ingridient } from "@/types/ingridients";

export interface IngridientItemProps {
    ingridient: Ingridient;
    onDelete: (id: number) => void;
}
