import {useState} from "react";
import {addTransaction} from "../services/api";

function TransactionForm({reload}){

const [title,setTitle]=useState("");
const [amount,setAmount]=useState("");
const [type,setType]=useState("income");

const submitHandler=async(e)=>{
e.preventDefault();

await addTransaction({
title,
amount,
type
});

setTitle("");
setAmount("");

reload();

};

return(

<div>

<h2>Add Transaction</h2>

<form onSubmit={submitHandler}>

<input
placeholder="Title"
value={title}
onChange={(e)=>setTitle(e.target.value)}
/>

<br/><br/>

<input
type="number"
placeholder="Amount"
value={amount}
onChange={(e)=>setAmount(e.target.value)}
/>

<br/><br/>

<select
value={type}
onChange={(e)=>setType(e.target.value)}
>

<option value="income">
Income
</option>

<option value="expense">
Expense
</option>

</select>

<br/><br/>

<button type="submit">
Add
</button>

</form>

</div>

)

}

export default TransactionForm;