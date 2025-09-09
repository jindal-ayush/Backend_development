import './App.css'
import { useEffect, useState } from 'react';
import axios from "axios";
import UserForm from "./components/User_form.jsx";

import UserList from './components/UserList';


function App() {
const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/users")
      .then(res => setUsers(res.data));
  }, []);

  return (
    <div>
      <h1>MERN CRUD App</h1>
      <UserForm setUsers={setUsers} />
      <UserList users={users} setUsers={setUsers} />
    </div>
  );
}


export default App;
