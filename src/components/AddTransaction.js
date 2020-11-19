import React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { GlobalContext } from '../context/GlobalState';
function AddTransaction() {
	const { addIncome, addexpense } = useContext(GlobalContext);

	const [Income, setIncome] = useState({
		incomeText: "",
		incomeAmount: 0,
	});


	const { incomeText, incomeAmount } = Income;


	const onChangeIncome = (e) => {
		setIncome({ ...Income, [e.target.name]: e.target.value });
	};

	const onSubmitIncome = (e) => {
    e.preventDefault();
    
    if(incomeText !== ""){

      const newIncomeTransaction = {
        id: uuidv4(),
        incomeText,
        incomeAmount: incomeAmount * 1,
      };
      addIncome(newIncomeTransaction);
      
      setIncome({
        incomeText: "",
        incomeAmount: 0,
      })

    }
	
	};


  const [Expense, setExpense] = useState({
		expenseText: '',
		expenseAmount: 0,
  });

  const { expenseText, expenseAmount } = Expense;
  

  const onChangeexpense = (e) => {
		setExpense({ ...Expense, [e.target.name]: e.target.value });
	};

	const onSubmitexpense = (e) => {
    e.preventDefault();
    
    if(expenseText !== ""){
     
      const newexpenseTransaction = {
        id:uuidv4(),
        expenseText,
        expenseAmount: expenseAmount * 1,
      };
      
      addexpense(newexpenseTransaction);
      setExpense({
        expenseText: '',
        expenseAmount: 0,
      })

    }
	
	};
	return (
		<div className="form-wrapper">
			<form onSubmit={onSubmitIncome}>
				<div className="input-group income">
					<input
						type="text"
						name="incomeText"
						placeholder="Add Income..."
            autoComplete="off"
            value={incomeText}
						onChange={onChangeIncome}
					/>
					<input
						type="number"
						name="incomeAmount"
            placeholder="Amount"
            value={incomeAmount}
						autoComplete="off"
						onChange={onChangeIncome}
					/>
					<input type="submit" value="Submit" />
				</div>
			</form>
			<form onSubmit={onSubmitexpense}>
				<div className="input-group expense">
					<input
						type="text"
						placeholder="Add Expense..."
						autoComplete="off"
            name="expenseText"
            value={expenseText}
						onChange={onChangeexpense}
					/>
					<input
						type="number"
						placeholder="Amount"
						autoComplete="off"
            name="expenseAmount"
            value={expenseAmount}
						onChange={onChangeexpense}
					/>
					<input type="submit" value="Submit" />
				</div>
			</form>
		</div>
	);
}

export default AddTransaction;
