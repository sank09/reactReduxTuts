import React,{useEffect,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { Button } from 'react-bootstrap';
import classes from './User.module.css';
import validator from 'validator';
import {fakeAuth} from '../../Auth/Auth';
import {changePassword} from '../../Actions/LoginAction';

export default function User(props) {

    const [isChangePass,setIsChangePass]=useState(false);
    const [newPassword,setNewPassword]=useState('');
    const [passError,setPassError]=useState('');
    const [isPassChanged,setPassChangedMsg]=useState('');
    const user_details=useSelector(state=> state.login.user)
    const dispatch=useDispatch();

    const handlePasswordChange=()=>{

        if(validator.isEmpty(newPassword) ){
            setPassError('New password cannot be blank')
        }else{
            localStorage.setItem("user_pass",newPassword);
            dispatch(changePassword({
                name:user_details.name,
                pass:newPassword
            }));
            setIsChangePass(false);
            setPassError('');
            setNewPassword('')
            setPassChangedMsg("Changed Successfully")
        }
    }
    const handleNewPassword=(event)=>{
        setNewPassword(event.target.value)
    }
   
    return (
        <div style={{padding:'5%'}}>
            <div>
                <div>
                    Username:{user_details.name}
                </div>
             {!isChangePass?
                 <div>
                 Password:****
             </div>  
                    :
         
            <div>
                New Password: <input type="password"  id="new_pass" onChange={handleNewPassword} />
             </div>
              
            }
            {passError?
                 <div className="error_section">{passError}</div>
                 :
                    ' '
            }
            {   
                !passError && isPassChanged?
                <div style={{color:'green'}}>{isPassChanged}</div>
                :''

            }
            
            </div>

            <div className={classes.user_btns}>
              
              {!isChangePass?
                    <div>
                     <Button onClick={()=>{
                         setIsChangePass(true)
                     }} 
                     variant="outline-dark">Change Password</Button>
                 </div>
                 :
                 <div>
                    <Button onClick={handlePasswordChange} variant="outline-dark">Save Password</Button>
                </div>
              } 

            

                <div style={{marginLeft:'12px'}}>
                    <Button variant="outline-dark" onClick={()=>{
            
                        fakeAuth.signout(()=>{
                                                  
                           window.location.href='/'
               
                        });

                    }}>Logout</Button>
                </div>

            </div>

        </div>
    )
}
