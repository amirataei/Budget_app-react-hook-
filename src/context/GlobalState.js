
import React ,{createContext, useReducer , useEffect} from 'react'
import AppReducer from './AppReducer'

    const initState = {
      incomeTransactions :  JSON.parse(localStorage.getItem("incomeTransactions")) || [],
      expenseTransactions :   JSON.parse(localStorage.getItem("expenseTransactions")) || []
    }


    
    export const GlobalContext = createContext(initState)




   const GlobalContextProvider = ({children}) => {

    
    useEffect(() => {
      localStorage.setItem(
        "incomeTransactions",
        JSON.stringify(state.incomeTransactions)
      );
      localStorage.setItem(
        "expenseTransactions",
        JSON.stringify(state.expenseTransactions)
      );
    });

      const [state, dispatch] = useReducer(AppReducer, initState)

       const addIncome = incomeTransactions => (
        dispatch({
          type :'ADD_INCOME',
          peyload : incomeTransactions
        })
       )
       const addexpense = expenseTransactions => (
        dispatch({
          type :'ADD_EXPENSE',
          peyload : expenseTransactions
        })
       )

       const DeleteTransaction = (id) => {
        dispatch({
          type :'Delete_Transaction',
          peyload : id
        })

       }

        return (
          <GlobalContext.Provider 
            value={{
                incomeTransactions : state.incomeTransactions,
                expenseTransactions : state.expenseTransactions,
                addIncome,
                addexpense,
                DeleteTransaction
            }}       
          >  
              {children}
          </GlobalContext.Provider>

        )
    }

 export default GlobalContextProvider
  