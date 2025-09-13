import axios from 'axios';

const url = "http://localhost:5000/api/users";

export const getUser = () =>{
    axios.get(url);
}
export const createUser =(data) =>{
    axios.post(url , data);
}
export const updateUser =(id ,data)=>{
    axios.put(`${url}/${id}`, data);
}
export const deleteUser = (id) =>{
    axios.delete(`${url}/${id}`);
}

