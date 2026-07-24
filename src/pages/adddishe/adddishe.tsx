import { useState } from "react";
import AddDisheImage from "./components/AddDisheImage/AddDisheImage";
import BackArrow from "@/components/backArrow";
import Category from "@/components/category";
import IngredientInput from "./components/IngridientInput/IngridientInput";
import IngridientList from "./components/ProductList/IngridientList";
import RecipeSteps from "./components/RecipeSteps/RecipeSteps";
import type { Ingridient, CreateIngridient } from "@/types/ingridients";
import { type DisheFormData } from "@/types/dishe";
import { type CreateRecipeStep } from "@/types/recipeStep";
import { useDisheMutations } from "@/hooks/useDisheMutations";
import { useCategories } from "@/hooks/useCategories";
import { useForm } from "react-hook-form";
import type { Product } from "@/types/product";

const AddDishe = () => {

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: {errors},
  } = useForm<DisheFormData>({
    defaultValues:{
      name:"",
      category:0,
      description:"",
      cooking_time:30,
      number_of_persons:1,
      image:null,
      ingridients:[],
      steps:[],

    },

  });

  const {createFullDishe, } = useDisheMutations();
  const ingridients = watch("ingridients");
  const image = watch("image");
  const steps = watch("steps");
  const category = watch("category");
  const disheName = watch("name");
  const [transpDisheNameLabel, setTranspDisheNameLabel] = useState(false);
  const categories =useCategories();

  const handleAddIngridient = (product: Product) => {
    const exists = ingridients.some(
      ingridient => ingridient.product === product.id
    )

    if (exists) return;

    setValue(
      "ingridients",
      [...ingridients, 
        {
          dishe:0,
          product: product.id,
          product_name: product.name,
          quantity:1,
          unit:"г",
          order: ingridients.length+1
        }
      ]
    )
  }

  const handleDelete = (id:number) => {
    setValue(
      "ingridients",
      ingridients.filter(ingridient=>ingridient.product!==id)
    )
  }

  const handleIngridientChange=(ingridient:CreateIngridient) => {
    setValue(
      "ingridients",
      ingridients.map((item)=>
        item.product===ingridient.product?ingridient:item
      )
    )
  }

  const changeImage = (file: File|null) => {
    setValue(
      "image",
      file
    )
  }

  const changeSteps = (newSteps:CreateRecipeStep[])=>{
    setValue(
      "steps",
      newSteps
    )
  }

  const handleCategory =(id)=>{
    setValue("category",id);
  }


  async function onSubmit(data:DisheFormData) {
    try {
      await createFullDishe.mutateAsync(
        data
      );
      alert("добавили блюдо :)")
    }
    catch (e) {
      console.error(e);
      console.log(e.response?.data);
      alert("Не добавили блюдо:(")
    }
    
  }


  return (
    <form
      onSubmit={handleSubmit(onSubmit)}

    >
      <div className="py-4">
        <div className="flex flex-row items-center justify-between px-4">
          <BackArrow/>
          <div className="text-gre1">Добавление блюда</div>
          <div>Иконки</div>
        </div>
        <div className="flex flex-col items-center h-screen w-full bg-cover bg-center px-4 py-6 gap-3">
          <AddDisheImage
              image={image}
              onchange={changeImage}
          />
          <div className="w-full flex flex-col items-center gap-2">
            <div className="w-full flex flex-col gap-3 relative border-b border-grey6">
                {(!disheName||transpDisheNameLabel)&&(<span className="
                  absolute top-0
                  w-full font-normal 
                  size-1 text-[17px] pl-2 
                  ">
                    Название блюда
                </span>)}
                <input type="text" 
                {...register("name", {
                  required: true,
                })} 
                placeholder="Куриный суп"
                onFocus={() => setTranspDisheNameLabel(true)}
                onBlur={() => setTranspDisheNameLabel(false)}
                className="
                    w-full border-0 rounded-md 
                    p-2 mt-5 focus:border-0 
                    focus:outline-none font-bold 
                    text-[17px] placeholder:font-normal
                  "/>
            </div>
            <Category 
                category={category}
                categories={categories}
                onChange={handleCategory}
            />    
            <IngridientList 
                ingridients={ingridients}
                onDelete={handleDelete}
                onChange={handleIngridientChange}
            />
            <IngredientInput
              onAdd={handleAddIngridient}
            />
            <RecipeSteps
              steps={steps}
              onChange={changeSteps}
            />
            <button
              type="submit"
              className="bg-primary text-white my-4 px-4 py-4 rounded-2xl
              text-[17px] font-semibold"
            >
              Сохранить блюдо
            </button>
          </div>
         </div>
      </div>
    </form>
  );
};

export default AddDishe;