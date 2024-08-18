import { useDispatch } from "react-redux"
import { setUsers } from "../Store/actions"

export const useGetUsers=()=>{


    const dispatch=useDispatch()

    const getAllUsers=async()=>{
    try {
        const res =await fetch("/api/users",{
            headers:{
                "Content-Type":"application/json"
            }})
            if(res.error) {
                throw new Error(res.error)
            }
            const data=await res.json()
            
    
    dispatch(setUsers(data))
    }
        
     catch (error) {
        console.log(error)
        
    }


    
   
    }
    
    
    return {getAllUsers}
}