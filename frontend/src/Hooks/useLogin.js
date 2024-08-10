import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../Contexts/auth.context"

export const useLogin=()=>{

const [loading,setLoading]=useState(false)

const {setAuthUser}=useAuthContext()

    const login=async(input)=>{


        
        const {userName,password}=input
        if(!userName || !password ) throw new Error("All fields Required !")


        setLoading(true)
        try {
            const res=await fetch('/api/auth/login',{
                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(input)
            })
    
            const data=await res.json();
                localStorage.setItem('authInfo',JSON.stringify(data))
                setAuthUser(data)



            
        } catch (error) {

            toast.error(error.message)

            
        }finally{
            setLoading(false)
        }
        




    }






    return {loading,login}
}