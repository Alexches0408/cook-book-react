const Category = () => {

    return (
        <div>
            <select
                className="
                    flex items-center w-full h-14 
                    border border-grey6 
                    rounded-2xl 
                    px-6 py-4
                    bg-transparent
                    appearance-none
                    text-grey2
                "
            >
                <option value="" disabled hidden>Категория</option>
                <option value="1">Вариант 1</option>
                <option value="2">Вариант 2</option>
            </select>
        </div>
    );
};

export default Category;