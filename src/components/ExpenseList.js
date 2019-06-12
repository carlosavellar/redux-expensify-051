import React from 'react';
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectedExpenses from "../selectors/expense";

const ExpenseList = ({ expenses }) => (
    <div>
        <h1>Testewww</h1>
        {expenses.map((expense) => <ExpenseListItem
            key={expense.id}
            {...expense}
        />)}
    </div>
);

const mapStateToProps = (state) => ({
    expenses: selectedExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);