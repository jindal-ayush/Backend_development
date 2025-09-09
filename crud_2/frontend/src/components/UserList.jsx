// import axios from "axios";

// function UserList({ users, setUsers }) {
//   const deleteUser = async (id) => {
//     await axios.delete(`http://localhost:5000/api/users/${id}`);
//     setUsers(users.filter((u) => u._id !== id));
//   };
//   return(
//     <ul>
//       {users.map(u => (
//         <li key={u._id}>
//             {u.name} - {u.email} - {u.age}
//             <button onClick={()=>deleteUser(u._id)}>Delete</button>
//         </li>

//       ))}
//     </ul>
//   );
// }

// export default UserList;


import axios from "axios";

function UserList({ users, setUsers }) {
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/api/users/${id}`);
    setUsers(users.filter(u => u._id !== id));
  };

  return (
    <ul>
      {users?.map((u) => (
        <li key={u._id}>
          {u.name} - {u.email} - {u.age}{" "}
          <button onClick={() => deleteUser(u._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
