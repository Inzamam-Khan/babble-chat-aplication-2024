import { combineReducers } from "redux";




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
    selectedConverastion

})

export default allReducers

