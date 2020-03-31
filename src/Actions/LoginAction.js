/*
* Author Sanket
*Login Action file
*/
import {ADD_USER_DETAILS,CHANGE_PASSWORD} from './types';


export const addUserDetails=(user_details)=>dispatch=>{
    console.log("add user actions",user_details)

 
       dispatch({
           type:ADD_USER_DETAILS,
           payload:{...user_details}
       }) 

}

export const changePassword=(user_details)=>dispatch=>{
    dispatch({
        type:CHANGE_PASSWORD,
        payload:{...user_details}
    }) 

}