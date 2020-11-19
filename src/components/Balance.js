import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
function Balance() {
	const { incomeTransactions, expenseTransactions } = useContext(GlobalContext);

	const incomeAmounts = incomeTransactions.map((incomeTransaction) => incomeTransaction.incomeAmount);
	const expenseAmounts = expenseTransactions.map((expenseTransaction) => expenseTransaction.expenseAmount);

    const Totalincome = incomeAmounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const Totalexpense = expenseAmounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
	return (
		<div className="balance">
			<h2>Your Balance</h2>
			<h3>${Totalincome - Totalexpense}</h3>
			<div className="income-expense">
				<div className="plus">
					<h3>income</h3>
					<p>${Totalincome}</p>
				</div>
				<div className="minus">
					<h3>Expense</h3>
					<p>${Totalexpense}</p>
				</div>
			</div>
		</div>
	);
}


export default Balance;
