import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setSelectedConversation } from "../../Store/actions"
import { useSocketContext } from "../../Contexts/SocketContext"


export const Conversation=({users,lastIndex})=>{
    const {fullName,profilePic}=users
    const dispatch=useDispatch()
    const selectedConversation=useSelector(state=>state.selectedConverastion)
    
    const isSelected=selectedConversation?._id === users?._id;

    const {onlineUsers}=useSocketContext()
    const isOnline=onlineUsers.includes(users._id)



    useEffect(()=>{
        return ()=>{
            dispatch(setSelectedConversation(null))
        }
    },[])
    
    return(
        <>

        <div onClick={()=>dispatch(setSelectedConversation(users))} className={`flex gap-2 items-center hover:bg-sky-500  p-2 py-1 cursor-pointer  rounded-full  hover:bg-gradient-to-r from-green-400 to-blue-500 ${isSelected? "bg-sky-600":""}`}>
            {/* avatar */}
            <div className={`avatar ${isOnline? `online`: ``}`}>
            
                <div className="w-12 rounded-full">
                    <img src={profilePic} alt="" />
                </div>

            </div>


            {/* user name and emojii... */}

        

        
            <div className="flex  flex-1 items-center">
            

                <div className="flex  flex-col  place-items-start">
                    <p className="font-bold capitalize ">{users.fullName}</p>                    
                    <span className="text-sky-900">some message</span>
                    
                </div>
                <span className="text-sm ml-auto mr-1">time</span>

            </div>
            
        
            
          
        </div>
        {!lastIndex && <span className="divider h-1 m-1 "></span> }
        </>
        
    )
}