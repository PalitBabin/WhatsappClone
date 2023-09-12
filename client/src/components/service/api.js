import axios from 'axios';

const URL = 'http://localhost:8000';

export const addUser = async(data) => {
    try {
        const response = await axios.post(`${URL}/add`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling addUser api:', error.message);
    }
}

export const getUsers = async() => {
    try {
        let response = await axios.get(`${URL}/users`);
        return response.data;
    } catch (error) {
        console.log('Error while calling getUsers API ', error);
    }
}

export const setConversation = async(data)=>{
    try{
        const response = await axios.post(`${URL}/conversation/add`,data);
        return response.data;
    }catch(error){
        console.log('Error while calling setConversation API ', error);
    }
}

export const getConversation = async(data)=>{
    try{
        const response = await axios.post(`${URL}/conversation/get`,data);
        return response.data;
    }catch(error){
        console.log('Error while calling getConversation API ', error);
    }
}

export const newMessage = async(data)=>{
    try{
        await axios.post(`${URL}/message/add`,data);
    }catch(error){
        console.log('Error while calling newMessage API ', error);
    }
}

export const getMessages = async(id,userId)=>{
    try{
        const response = await axios.get(`${URL}/message/get/${id}/${userId}`);
        return response.data;
    }catch(error){
        console.log('Error while calling getMessage API ', error);
    }
}

export const uploadFile = async(data)=>{
    try{
        const response = await axios.post(`${URL}/file/upload`,data);
        return response.data;
    }catch(error){
        console.log('Error while calling uploadFile API ', error);
    }
}

