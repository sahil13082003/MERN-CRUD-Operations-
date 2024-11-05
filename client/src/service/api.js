import axios from 'axios';

// const URL = "https://mern-crud-operations-9948.onrender.com";
const URL = "http://localhost:8000";

export const addUser = async(data) => {
    try{
        return await axios.post(`${URL}/add`,data);
    }catch(error){
        console.log("error",error);
    }
}

export const getUsers = async() => {
    try{
    return await axios.get(`${URL}/all`)
    }catch(error){
        console.log('Error in getting user', error);
    }
}

export const getUser = async (id) =>{
    try{
        return await axios.get(`${URL}/${id}`) 
    }catch(error){
        console.log('Error in getting user', error);
}
}

export const editUser = async(user, id) => {
    try{
        return await axios.post(`${URL}/${id}`, user);
        // return await axios.put(`${URL}/${id}`, user);
    }catch(error){
        console.log("error",error);
    }
}

export const deleteUser = async (_id) => {
    try {
        return await axios.delete(`${URL}/${_id}`);
    } catch (error) {
        console.error("Error calling delete", error);
    }
};


