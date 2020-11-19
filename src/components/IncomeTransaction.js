import React , {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
export function IncomeTransaction({incomeTransaction}) {

  const {DeleteTransaction} = useContext(GlobalContext)
    return (
        <li className="transaction">
          <span className="transaction-text">{incomeTransaction.incomeText} </span>
          <span className="transaction-amount">{incomeTransaction.incomeAmount}</span>
          <button className="delete-btn" onClick={()=> DeleteTransaction(incomeTransaction.id)}>
            <i className="fas fa-trash" />
           </button>
        </li>
    )
}

export default IncomeTransaction
