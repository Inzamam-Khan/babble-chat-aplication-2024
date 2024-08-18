import { useEffect, useRef } from "react"
import { useGetConversation } from "../../Hooks/useGetConversation"
import { Message } from "./Message"
import {useDispatch, useSelector} from 'react-redux'
import { setMessages } from "../../Store/actions"
import { useListenMessages } from "../../Hooks/useListenMessages"
export const Messages=()=>{
    const selectedConversation=useSelector(state=>state.selectedConverastion)
    const allMessages=useSelector(state=>state.Messages)
    
    
    const dispatch=useDispatch()

    
    const scrollRef=useRef(null)
    
    const {loading,getConveration}=useGetConversation()
    useListenMessages()


    setTimeout(()=>{
        scrollRef?.current?.scrollIntoView({behavior:'smooth'})
            // console.log("scroll into view")
            // scrollRef.scrollTop = scrollRef.scrollHeight;
    },500)


    useEffect(()=>{
        getConveration(selectedConversation?._id)
        
        
        
        
        return ()=>dispatch(setMessages([]))

    },[selectedConversation])


    return(
        <div   className="px-4 flex-1 overflow-auto border">

            {allMessages?.map((msg,index)=>(

                <div ref={scrollRef} key={index}>
                        <Message key={index} {...msg}/>    
                </div>
                            
                
        
                    
        
               
            ))}
            
          
        </div>
    )
}

