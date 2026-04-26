import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import Summary from "../components/Summary";

import { getTransactions, getSummary } from "../services/api";

function Dashboard() {

const navigate = useNavigate();

const [transactions, setTransactions] = useState([]);
const [summary, setSummary] = useState({});

const loadData = async () => {
 const t = await getTransactions();
 setTransactions(t.data);

 const s = await getSummary();
 setSummary(s.data);
};

useEffect(() => {
 loadData();
}, []);

const logout = () => {
 localStorage.removeItem("token");
 navigate("/");
};

return (
 <div>

  <h1>Expense Dashboard</h1>

  <Summary summary={summary} />

  <TransactionForm reload={loadData} />

  <TransactionList transactions={transactions} />

  <button onClick={logout}>
   Logout
  </button>

 </div>
);

}

export default Dashboard;