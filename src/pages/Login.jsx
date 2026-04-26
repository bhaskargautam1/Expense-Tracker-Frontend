import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";
import { Link } from "react-router-dom";
function Login(){

const navigate=useNavigate();

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const submitHandler=async(e)=>{

e.preventDefault();

try{

const res=await loginUser({
 email,
 password
});

localStorage.setItem(
"token",
res.data.token
);

alert("Login Success");

navigate("/dashboard");

}

catch(error){

console.log(error);

alert("Invalid Credentials");

}

};

return(
<div>

<h2>Login</h2>

<form onSubmit={submitHandler}>

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
Login
</button>

<p>
  Don't have an account?{" "}
  <Link to="/register">
    Register here
  </Link>
</p>

</form>

</div>
)

}

export default Login;