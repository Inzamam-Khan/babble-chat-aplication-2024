import { useEffect } from "react"
import { Conversation } from "./Conversation"
import {useDispatch, useSelector} from 'react-redux'
import { setUsers } from "../../Store/actions"
import { useGetUsers } from "../../Hooks/useGetUsers"



export const Conversations =({searchValue})=>{
    

    const user=useSelector(state=>state.allUsers).filter((item)=>(
        searchValue?
        item.fullName.includes(searchValue) : item))
    
    
    const {getAllUsers}=useGetUsers()
    
    
     useEffect(()=>{
      getAllUsers()
      
    },[])
    return(
        <div className=" flex flex-col overflow-auto pr-4  mb-1">


            {user?.map((item,currentIndex)=> 
                
             <Conversation users={item} key={item._id} lastIndex={currentIndex === user.length-1}/>
             

            
            
            
            )}





            
          
        </div>
    )
}