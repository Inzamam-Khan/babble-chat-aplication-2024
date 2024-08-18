import { useEffect, useState } from "react";
import { useSocketContext } from "../Contexts/SocketContext"
import { addMessages } from "../Store/actions";
import { useDispatch,useSelector } from "react-redux";
import notificationSound from '../assets/startup.mp3'


export const useListenMessages=()=>{
    const {socket}=useSocketContext();
    const dispatch=useDispatch()
    
    
    
 

    useEffect(()=>{
        socket?.on('newMessage',(newMessage)=>{
            const sound =new Audio(notificationSound)
            sound.play()
            dispatch(addMessages(newMessage))
            
        })

        return ()=>socket?.off('newMessage');

    },[socket])

    
}