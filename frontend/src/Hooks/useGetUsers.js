import { useDispatch } from "react-redux"
import { setUsers } from "../Store/actions"

export const useGetUsers=()=>{


    const dispatch=useDispatch()


    const getAllUsers=async()=>{
    const res =await fetch("/api/users",{
        headers:{
            "Content-Type":"application/json"
        }
    })
    const data=await res.json()
    
    dispatch(setUsers(data))
    }
    
    return {getAllUsers}
}