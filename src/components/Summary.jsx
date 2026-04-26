function Summary({summary}){

    return(
    
    <div>
    
    <h2>Summary</h2>
    
    <p>
    Income:
    {summary.totalIncome}
    </p>
    
    <p>
    Expense:
    {summary.totalExpense}
    </p>
    
    <p>
    Balance:
    {summary.balance}
    </p>
    
    </div>
    
    )
    
    }
    
    export default Summary;