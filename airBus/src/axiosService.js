import axios from 'axios'
const serverUrl = 'http://localhost:5174'

export const postQuery =async (url, data)=>{
    let obj = {}
    try{
        let result = await axios.post(`${serverUrl}/${url}`, data,{
        headers:{
            'Content-Type': 'application/json',
        }, withCredentials: true});
        console.log('satus ', result.status)
        obj =  {error: false, data: result.data}
    }
    catch(err){
        obj = {error: true}
    }
    return obj;
}

export const getQuery =async (url)=>{
    let obj = {}
    try{
        let result = await axios.get(`${serverUrl}/${url}`, {
            headers:{
                'Content-Type': 'application/json',
            }, withCredentials: true});
        obj = {error: false, data: result.data}
    }
    catch(err){
        obj = {error: true}
    }
    return obj;
}