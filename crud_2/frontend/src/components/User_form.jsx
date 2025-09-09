// import axios from "axios";
// import { useState } from "react";

// function Userform({ setUsers }) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [age, setAge] = useState("");

//   const handlerSubmit = async () => {
//     if (!name || !email || !age) {
//       return alert("all fileds are required");
//     }
//     const res = await axios.post("http://localhost:5000/api/users", {
//       name,
//       email,
//       age,
//     });
//     setUsers((prev) => [...prev, res.data]);
//     setName("");
//     setEmail("");
//     setAge("");
//   };

//   return (
//     <div>
//       <input
//         placeholder="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         placeholder="Age"
//         value={age}
//         onChange={(e) => setAge(e.target.value)}
//       />
//       <button onClick={handlerSubmit}>Add User</button>
//     </div>
//   );
// }
// export default Userform;




import axios from 'axios';
import { useState } from "react";

function UserForm({ setUsers }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async () => {
    if (!name || !email || !age) return alert("All fields are required");
    const res = await axios.post("http://localhost:5000/api/users", {
      name,
      email,
      age,
    });
    setUsers(prev => [...prev, res.data]);
    setName("");
    setEmail("");
    setAge("");
  };

  return (
    <div>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />
      <button onClick={handleSubmit}>Add User</button>
    </div>
  );
}

export default UserForm;
