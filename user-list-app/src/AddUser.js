import { useState } from 'react';
import Button from './Button';
const AddUser  = (props) => {
    const initialValue = {
        "username" : "",
        "age" : ""
    }
    const [userInfo, setUserInfo] = useState(initialValue)

    const resetErrorandSaveUser = () => {
        props.errorType("");
        props.addUser(userInfo);
    }
    const addUserHandler = (event) => {

        event.preventDefault();
        if(userInfo.username === "" || userInfo.age === ""){
            props.errorType("empty");
        }else if( userInfo.age < 0){
            props.errorType("negativeAge")
        }else{
            resetErrorandSaveUser();
        }
        
         
    }

    const inputHandler = (input,value) => {
        setUserInfo( (prevState) => {
            return{
                ...prevState,
                [input] : value
        };
        });
        
    }
    return(
        <form onSubmit={addUserHandler} className='form'>
            <div>
            <label>Username</label>
            <input onChange= {(event) => inputHandler("username",event.target.value) } id="username" type="text"/>
            </div>
            <div>
            <label>Age (Years)</label>
            <input onChange= {(event) => inputHandler("age",event.target.value) } id="age" type="number"/>
            </div>
            <div>
            <Button>
                <input type="submit"/>
            </Button>
            </div>
            
        </form>
    );
}
export default AddUser;