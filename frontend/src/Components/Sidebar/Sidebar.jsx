import { useState } from "react"
import { Conversations } from "./Conversations"
import { Logout } from "./Logout"
import { SearchInput } from "./SearchInput"

export const Sidebar=()=>{

    const [searchValue,setSearchValue]=useState("")
    

    return(
        <div className="border-r  border-slate-500 p-4 flex flex-col">

            <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
            
            <div className="divider divider-info px-3"></div>
             <Conversations searchValue={searchValue}/>
             <Logout/>  
             

        </div>
    )
}





