import { BiSolidSend } from "react-icons/bi"
import { MdOutlineInsertPhoto } from "react-icons/md";
export const MessageInput=()=>{
    return(
        <form action=""className="px-4 py-1">

            <div className="w-full relative ">

          
                <input type="text" className="border text-sm rounded-lg block w-full p-2.5 
                bg-gray-700 border-gray-600 text-white " placeholder="Send a Message"/>
                

                <button className="absolute inset-y-0 end-9 flex items-center pe-3">
                    <MdOutlineInsertPhoto className="text-blue-500" />
                    </button>

               <button className="absolute inset-y-0 end-0 flex items-center pe-3" type="submit">
                    <BiSolidSend className="text-blue-500"/>
                </button>

              

            </div>


        </form>
    )

}