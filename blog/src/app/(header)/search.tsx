import { useState } from "react"
import { atom, useSetRecoilState } from "recoil"

export const SearchQueryAtom = atom({
  key: "searchQuery",
  default: ""
})

export default function Search() {

  const [isExtended, setIsExtended] = useState(false)
  const setQuery = useSetRecoilState(SearchQueryAtom)

  const onSearchClick = () => {
    setIsExtended(!isExtended)
    
    isExtended
      ? document.getElementById("search")?.blur()
      : document.getElementById("search")?.focus()
  }

  return (
    <div className={`${isExtended ? "bg-glacier-400 pl-2" : ""} h-10 flex transition-all rounded font-fraunces text-sm overflow-hidden`}>

      <input id="search" onChange={e => setQuery(e.target.value)} className={`${isExtended ? "w-48 opacity-100" : "w-0 opacity-0"} transition-all outline-none bg-transparent placeholder:text-white/90`} type="text" placeholder="Search" />

      <div className="aspect-square h-full ml-auto cursor-pointer rounded p-1 hover:bg-glacier-300 transition-colors overflow-hidden drop-shadow-lg" onClick={onSearchClick}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </div>
    </div>
  )
}

