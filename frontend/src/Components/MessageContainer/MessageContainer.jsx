import { MessageInput } from "./MessageInput"
import { Messages } from "./Messages"
import { TiMessages } from "react-icons/ti";
import userIcon from '../../../public/userIcon.png'
import { useAuthContext } from "../../Contexts/auth.context";
import { useSelector } from "react-redux";

export const MessageContainer=()=>{
    
    const selectedConversation=useSelector(state=>state.selectedConverastion)
    const {authUser}=useAuthContext()

    


    return(
        <div className="md:min-w-[450px] flex flex-col ">


        {!selectedConversation ? (<NoChatSelected authUser={authUser}/>):(
            <>
            

            {/* header start */}
            <div className="bg-slate-500 px-4 py-4 mb-2 flex items-center gap-3">
                <span className="avatar online rounded-full w-8 ">
                    <img src={selectedConversation.profilePic}  alt="" />
                </span>
                <span className="text-blue-500 font-bold capitalize">{selectedConversation.fullName}</span>
            </div>
                            {/* header end */}
            <Messages/>
            <MessageInput/>
            </>
        )}

        </div>

        
        

     
    )
}


const NoChatSelected=({authUser})=>{
    
    return(
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-blue-500 font-semibold flex flex-col items-center gap-3">
                <p>Welcome {authUser.fullName}</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className="text-3xl md:text-6xl text-center text-white"/>

            </div>
        </div>
    )
}