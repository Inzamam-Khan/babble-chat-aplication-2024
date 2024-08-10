
import { BiLogOut } from "react-icons/bi";
import {useLogout} from "../../Hooks/useLogout.js"



export const Logout=()=>{


    const {logout} =useLogout()
    return(
        <div className="mt-auto">
            <BiLogOut className=" hover:text-red-600 cursor-pointer w-6 h-6"  onClick={logout} />
        </div>
    )
}