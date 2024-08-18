import { useState } from "react"
import {useDispatch, useSelector} from 'react-redux'
import { addMessages } from "../Store/actions"
export const useSendMessage=()=>{

    const[loading,setLoading]=useState(false)
    const selectedConversation=useSelector(state=>state.selectedConverastion)
    
    const dispatch=useDispatch()
    
    const sendMessage=async(message)=>{
        setLoading(true)
        try {
            const res=await fetch(`/api/messages/send/${selectedConversation?._id}`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({message})

            })
            const data=await res.json()
            dispatch(addMessages(data))
            
            
        } catch (error) {
            
        }finally{
            setLoading(false)
        }


    }
    
    
    
    return{sendMessage,loading}
}