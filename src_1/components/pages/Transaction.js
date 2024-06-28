import React from 'react';
import './Transaction.css';

class Transaction extends React.Component{
    state = {
        currentbalance:1000
    }
    creditFunction=()=>{
        alert("creditttttttttttttttttttttttt")

    }
    render(){
        return(
         <>
         <div>
             <h5 className ="right">Current Balance : {this.state.currentbalance}</h5>
         </div>    
         <div className = "container">
           <div className = "space mt-4">
                <h5 onClick={this.creditFunction}>Credit</h5>
                <h5>Debit</h5>
                <h5>Transfer to others</h5>  
            </div>
        </div>
         </>
        )
    }
}
export default Transaction;