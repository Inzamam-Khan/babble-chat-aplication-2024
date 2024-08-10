import { Conversations } from "./Conversations"
import { Logout } from "./Logout"
import { SearchInput } from "./SearchInput"

export const Sidebar=()=>{
    return(
        <div className="border-r  border-slate-500 p-4 flex flex-col">

            <SearchInput/>
            
            <div className="divider divider-info px-3"></div>
             <Conversations/>
             <Logout/>  
             

        </div>
    )
}





