export type SectionId = "cookbook" | "comedish" | "listpurchase" | "weekmenu";

export  const navLinks: {id: SectionId; label: string}[] = [
    {id:"cookbook", label:"Книга рецептов"},
    {id:"comedish", label:"Придумать блюдо"},
    {id:"listpurchase", label:"Список покупок"},
    {id:"weekmenu", label:"Меню на неделю"},
]

