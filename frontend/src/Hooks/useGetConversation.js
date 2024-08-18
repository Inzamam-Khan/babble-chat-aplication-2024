import { useState } from "react"
import { useDispatch } from "react-redux"
import { setMessages } from "../Store/actions"

export const useGetConversation=()=>{

    const[loading,setLoading]=useState(true)
    const dispatch=useDispatch()
    

    const getConveration=async(id)=>{
        
        setLoading(true);
        try {
            const result=await fetch(`/api/messages/${id}`,{
                headers:{
                    "Content-Type":"application/json"
                }
            })
            const res=await result.json()
            dispatch(setMessages(res))
            
            
        } catch (error) {
            
        }finally{
            setLoading(false)
        }
    }
    
    





    return {
        getConveration,loading
    }
}