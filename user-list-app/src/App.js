import React, {useState} from 'react';
import Card from './Card';
import AddUser from './AddUser.js';
import ErrorModal  from './ErrorModal';
import UsersList from './UsersList';

import './index.css';

function App() {
  const [userList, setUserList] = useState([]);
  const [errorType, setErrorType] = useState("");
  return (
    <div>
      <Card>
        <AddUser addUser = {(user) => setUserList(user)} errorType = {(error) => setErrorType(error)} />
      </Card>
      {userList.length != 0 && <UsersList userList = {userList}/>}
      {errorType.length != 0 && <ErrorModal errorType = {errorType}/>}
      

    </div>
  );
}

export default App;
