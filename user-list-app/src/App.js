import React, {useState} from 'react';
import Card from './Card';
import AddUser from './AddUser.js';
import UsersList from './UsersList';
import ErrorModal  from './ErrorModal';
import './index.css';

function App() {
  const [userList, setUserList] = useState([]);
  const [errorType, setErrorType] = useState("");
  const addUserHandler = (user) => {
    setUserList((prevState) => {
      return[
        ...prevState,
        user
      ]
    });
  }
  return (
    <div>
      <Card>
        <AddUser addUser = {addUserHandler} errorType = {(error) => setErrorType(error)} />
      </Card>
      <Card>
          {errorType.length != 0 && <ErrorModal errorType = {errorType}/>}
         {userList.length != 0 && <UsersList userList = {userList}/>}
      </Card>

     
      
      

    </div>
  );
}

export default App;
