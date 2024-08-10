import { useState } from "react"
import { Link } from "react-router-dom"
import { useLogin } from "../../Hooks/useLogin"
import {Startup} from '../../Components/StartupSound/startup'
export  const Login=()=>{





    const [input,setInput]=useState({
        userName:'',
        password:''
        
    })


    const {login,loading}=useLogin()

    const handleLogin=async(e)=>{

        e.preventDefault();

        await login(input)

    }





    return(
        <div className="flex flex-col items-center justify-center min-w-95   mx-auto"> 
        <div className="w-full  p-6   rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0">
            <h2 className="text-3xl font-bold text-center text-gray-300">Login <span className="text-blue-500">BabbleApp</span> </h2>

            <form action="" onSubmit={handleLogin}>
                <div>
                    <label className="label p-2">
                        <span className="text-base abel-text">Username</span>
                    </label>
                    <input type="text" placeholder="Enter username" value={input.userName} onChange={(e)=>{setInput({...input,userName:e.target.value})}} className="w-full input input-bordered h-10" />
                </div>

                <div>
                    <label className="label p-2">
                   
                        <span className="text-base abel-text">Password </span>                            
                    </label>
                    <input type="password" placeholder="Enter Password" value={input.password} onChange={(e)=>{setInput({...input,password:e.target.value})}} className="w-full input input-bordered h-10 " />
                </div>

               
                <span className="text-sm hover:text-blue-600 mt-2 ">Forget Password</span>

                <div>
                    <button className="btn btn-block btn-sm mt-2">Login</button>
                </div>
                
                    <Link to="/signup" className="text-sm hover:underline  flex justify-center  hover:text-blue-600 mt-2 ">{"Don't"} have an account</Link>

               


            </form>
        <Startup/>
        </div>
        </div>
    )
}