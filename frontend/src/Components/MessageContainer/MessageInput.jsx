import { useEffect, useRef, useState } from "react";
import { BiSolidSend } from "react-icons/bi"
import { MdOutlineInsertPhoto } from "react-icons/md";
import { useSendMessage } from "../../Hooks/useSendMessage";
import { useGetConversation } from "../../Hooks/useGetConversation";
export const MessageInput=()=>{

    const{sendMessage,loading}=useSendMessage()
    

    const [input,setInput]=useState("")
    const fileRef=useRef()

    const handleSubmit=(e)=>{
        e.preventDefault();
        sendMessage(input)
        setInput("")
    }
   

    return(
        // <form action=""className="px-4 py-1" >

            <div className="w-full relative px-1 py-1 ">

          
                <input type="text" className="border text-sm rounded-lg block w-full p-2.5 
                bg-gray-700 border-gray-600 text-white " placeholder="Send a Message"
                value={input} onChange={(e)=>setInput(e.target.value)} />

                <input hidden type="file"  ref={fileRef}/>
                

                <button className="absolute inset-y-0 end-9 flex items-center pe-3" onClick={()=>fileRef.current.click()}>
                    <MdOutlineInsertPhoto className="text-blue-500" />
                    </button>

               <button className="absolute inset-y-0 end-0 flex items-center pe-3" type="submit" onClick={handleSubmit}>

                    {loading? <div className="loading loading-spinner"></div>:<BiSolidSend className="text-blue-500"/>}

                </button>

              

            </div>


        //  </form>
    )

}