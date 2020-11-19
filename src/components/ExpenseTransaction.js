import React , {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
export function ExpenseTransaction({expenseTransaction}) {
    
  const {DeleteTransaction} = useContext(GlobalContext)
    return (
        <li className="transaction">
        <span className="transaction-text">{expenseTransaction.expenseText}</span>
        <span className="transaction-amount">${expenseTransaction.expenseAmount}</span>
        <button className="delete-btn" onClick={()=> DeleteTransaction(expenseTransaction.id)}>
          <i className="fas fa-trash" />
         </button>
        </li>
    )
}

export default ExpenseTransaction
