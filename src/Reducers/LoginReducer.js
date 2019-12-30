import {ADD_USER_DETAILS} from '../Actions/types';

const start_state={loggedin:false,user:{}};

export const LoginReducer=(initial_state=start_state,action)=>{

    switch(action.type){
        case ADD_USER_DETAILS:
            return{
                loggedin:true,
                user:action.payload
            }
         default:
            return initial_state

    }
 
}
