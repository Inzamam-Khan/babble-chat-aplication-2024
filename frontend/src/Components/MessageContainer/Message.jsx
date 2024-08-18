import { useAuthContext } from "../../Contexts/auth.context"
import { getTime } from "../../utils/getTime"

export const Message=({...msg})=>{


    const {authUser}=useAuthContext()
    let fromMe=authUser._id ===msg?.senderId

    let chatStyle=fromMe? `chat-end`:`chat-start`
    let chatBg=fromMe? `bg-gray-600` :"bg-blue-600"
    
    return(
        <div className={`chat ${chatStyle} `}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src="" alt="" />
                </div>
            </div>

<div className={`chat-bubble text-white ${chatBg}`}>{msg?.message}</div>
<div className="chat-footer opacity-50 text-sm flex gap-1 items-center">{getTime(msg?.createdAt)}</div>



        </div>
    )
}