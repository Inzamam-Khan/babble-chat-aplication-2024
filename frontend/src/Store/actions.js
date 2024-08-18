export const setUsers=(payload)=>{
    return{
        type:'SET_USERS',payload
    }
}


export const setSelectedConversation=(payload)=>{
    return{
        type:"SET_SELECTED_CONVERSATION",payload
    }


}



export const setMessages=(payload)=>{
    return{
        type:"SET_MESSAGES",
        payload
    }

}

export const addMessages=(payload)=>{
    return{
        type:'ADD_MESSAGE',
        payload
    }
}

export const filterUsers=(payload)=>{
    return{
        type:"FILTER_USERS",
        payload
    }
}