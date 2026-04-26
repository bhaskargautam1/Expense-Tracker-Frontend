import { useState } from "react";
import { registerUser } from "../services/api";
import { useNavigate } from "react-router-dom";

function Register(){

const navigate=useNavigate();

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const submitHandler=async(e)=>{
e.preventDefault();

try{

await registerUser({
name,
email,
password
});

alert("Registered Successfully");

navigate("/");

}

catch(error){
console.log(error);
alert("Registration Failed");
}

};

return(
<div>

<h2>Register</h2>

<form onSubmit={submitHandler}>

<input
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<br/><br/>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<br/><br/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<br/><br/>

<button type="submit">
Register
</button>

</form>

</div>
)

}

export default Register;