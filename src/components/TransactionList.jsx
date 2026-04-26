function TransactionList({transactions}){

    return(
    
    <div>
    
    <h2>Transactions</h2>
    
    {
    transactions.map((item)=>(
    
    <div key={item._id}>
    
    <h4>
    {item.title}
    </h4>
    
    <p>
    {item.type}
    -
    {item.amount}
    </p>
    
    <hr/>
    
    </div>
    
    ))
    }
    
    </div>
    
    )
    
    }
    
    export default TransactionList;