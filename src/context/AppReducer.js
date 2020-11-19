// eslint-disable-next-line import/no-anonymous-default-export
export default(state , action) => {

 switch(action.type){
   case "ADD_INCOME":
   return {
    ...state ,
    incomeTransactions : [action.peyload , ...state.incomeTransactions]
   }
   case "ADD_EXPENSE":
   return {
    ...state ,
    expenseTransactions : [action.peyload , ...state.expenseTransactions]
   }
   case "Delete_Transaction":
     return {
      ...state,
      incomeTransactions : state.incomeTransactions.filter(
         (incomeTransaction) => incomeTransaction.id !== action.peyload
      ),
      expenseTransactions : state.expenseTransactions.filter(
        (expenseTransaction) => expenseTransaction.id !== action.peyload
     )
     }
  default:
   return state;

 }

    
}