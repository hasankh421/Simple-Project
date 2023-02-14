import React, {useState} from 'react'
import AddUser from './components/UI/Users/AddUser'
import UserList from './components/UI/Users/UsersList'

export default function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList)=>{
      return [...prevUsersList , {name: uName, age: uAge, id: Math.random().toString()}];
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />

    </div>
  )
}

