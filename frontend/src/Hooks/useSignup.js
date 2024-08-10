
import { useState } from "react"

import toast from "react-hot-toast"
import { useAuthContext } from "../Contexts/auth.context"
export const useSignup=()=>{


const [loading,setLoading]=useState(false)

const {setAuthUser}=useAuthContext()



const signup=async(input)=>{
    
    
    const {fullName,userName,password,gender}=input;
    const success=handleInputErrors(fullName,userName,password,gender)
    if(!success) return;
    setLoading(true)
    try {
        const res = await fetch("/api/auth/signup",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"},
            body:JSON.stringify(input)
        })

        const data=await res.json()
        
        if(data.error) throw new Error(data.error)
        

            localStorage.setItem("authInfo",JSON.stringify(data))
            setAuthUser(data)

          
        
    } catch (error) {
        toast.error(error.message)
        
    }
    finally{
        setLoading(false)
    }



}



return {loading,signup}


}


const handleInputErrors=(fullName,userName,password,gender)=>{
    if(!fullName || !userName || !password || !gender){
        toast.error("All fields are must")


        return false;
    }
    

    if(password.length<6){





        toast.error("Password must be atleast 6 charcters !")
        return false;

    }

    return true

}


