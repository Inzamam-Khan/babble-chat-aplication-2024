import { FaSearch } from "react-icons/fa";
export const SearchInput=()=>{
    return(
        <form action="" className="flex flex-center gap-2">
            <input type="text" placeholder="Search" className="input input-bordered rounded-full" />
            
            <button type="submit" className="btn  border-none btn-circle bg-transparent  text-blue-600">
                <FaSearch/>
            </button>
        </form>
    )
}