import axios from "axios";

const API = axios.create({
 baseURL:"http://localhost:4000/api"
});


API.interceptors.request.use((req)=>{

const token=localStorage.getItem("token");

if(token){
req.headers.Authorization=`Bearer ${token}`;
}

return req;

});


export const loginUser=(data)=>{
return API.post(
"/auth/login",
data
);
};


export const registerUser=(data)=>{
return API.post(
"/auth/register",
data
);
};


export const getTransactions=()=>{
return API.get(
"/transactions"
);
};


export const addTransaction=(data)=>{
return API.post(
"/transactions",
data
);
};


export const getSummary=()=>{
return API.get(
"/transactions/summary"
);
};