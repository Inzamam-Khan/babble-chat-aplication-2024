import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { filterUsers } from "../../Store/actions";
import { useState } from "react";
export const SearchInput=({searchValue,setSearchValue})=>{

    // const [search,setSearch]=useState('')

    // const dispatch=useDispatch()


    // const handleSearch=(e)=>{
    //     e.preventDefault()
    //     dispatch(filterUsers(search))
    //     setSearch("")
        

    // }
    return(
        <form action="" className="flex flex-center gap-2" >
            <input type="text" placeholder="Search" className="input input-bordered rounded-full" value={searchValue} 
            onChange={(e)=>setSearchValue(e.target.value)}/>
            
            <button type="submit" className="btn  border-none btn-circle bg-transparent  text-blue-600">
                <FaSearch/>
            </button>
        </form>
    )
}