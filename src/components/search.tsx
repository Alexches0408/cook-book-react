import SearchIcon from "@/assets/icons/icon-search.svg?react"


const Search = () => {
  return (
    <div className="flex items-center w-full h-14 border border-grey6 rounded-2xl px-6 py-4">
      <SearchIcon />
      <input
        className="w-full h-full ml-4 text-sm font-normal  placeholder:text-grey2 focus:outline-none"
        type="text"
        placeholder="Найти блюдо..."></input>
    </div>
  )
}

export default Search
