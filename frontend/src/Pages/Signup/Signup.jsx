import { Link } from "react-router-dom"
import { GenderCheckBox } from "./GenderCheckBox"
import { useState } from "react"
import { useSignup } from "../../Hooks/useSignup"
import { Startup } from "../../Components/StartupSound/startup"




export  const Signup=()=>{
    const [input,setInput]=useState({
        fullName:'',
        userName:'',
        password:'',
        gender:'male'
    })


    const {loading,signup}=useSignup()
    
const handleGender=(gender)=>{
    setInput({...input,gender})
    

}



const handleSubmit=async(e)=>{
    e.preventDefault()
    const res= await signup(input)
    
 
}

    return(
        
        <div className="flex flex-col items-center justify-center min-w-95 mx-auto"> 
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 ">
            <h2 className="text-3xl font-bold text-center text-gray-300">Signup <span className="text-blue-500">BabbleApp</span> </h2>

            <form action=""className="" onSubmit={handleSubmit}>
                
                <div className="">
                    <label className="label p-2 ">
                        <span className="text-base label-text">Fullname</span>
                    </label>
                    <input type="text" value={input.fullName} onChange={(e)=>{setInput({...input,fullName:e.target.value})}} placeholder="Enter Fullname" className="w-full input input-bordered h-10" />
                </div>

                <div>
                    <label className="label p-2">
                        <span className="text-base  label-text ">Username</span>
                    </label>
                    <input type="text" value={input.userName} onChange={(e)=>{setInput({...input,userName:e.target.value})}} placeholder="Enter username" className="w-full input input-bordered h-10" />
                </div>



                <div>
                    <label className="label p-2">
                   
                        <span className="text-base label-text">Password </span>                            
                    </label>
                    <input type="password" value={input.password} onChange={(e)=>{setInput({...input,password:e.target.value})}} placeholder="Enter Password" className="w-full input input-bordered h-10" />
                </div>
                
            


                <GenderCheckBox handleGender={handleGender} selectedGender={input.gender}/>
                

                <Link to="/login" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">{"Already"} have an account?</Link>

                <div>
                    <button className="btn btn-block btn-sm mt-2" >Signup</button>
                </div>

            </form>
       <Startup/>
    
            
        </div>
        </div>
    )
}

