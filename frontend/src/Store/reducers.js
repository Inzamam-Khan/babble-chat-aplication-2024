import { combineReducers } from "redux";

// get all messages with the selected conversation/user
function Messages(state=[],action){
    const {type,payload}=action;
    
    switch(type){
        case "SET_MESSAGES":{
            return state=payload;
        }
        case "ADD_MESSAGE":{

            return [...state,payload]
        
        }
        default:{
            return state;
        }
    }

}

// selected conversation;
function selectedConverastion(state=null,action){
    const {type,payload}=action;
    switch(type){

        case "SET_SELECTED_CONVERSATION":
            {
                return payload;

            }
        default:{
            return state;
        }

    }

}

// get all users for sidebar
function allUsers(state=[],action){
    const {type,payload}=action

    switch(type){
        case "SET_USERS":
            {
                return state=payload;
            }

        default:
            {
                return state;
            }
    }
}

const allReducers=combineReducers({
    allUsers,
    selectedConverastion,Messages

})

export default allReducers

