// Teste Undo COmmit
import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';
import ExpensesSumary from './ExpensesSymary';
import { Button } from 'semantic-ui-react';

const ExpenseDashboardPage = () => (
  <div>
    <div>
      <div>
        <Button primary>Primarywww</Button>
        <Button secondary>Secondary</Button>
      </div>
    </div>
    <ExpenseList />
    <ExpenseListFilter />
    <ExpensesSumary />
    <button className="ui button">Click Here</button>
  </div>
);

export default ExpenseDashboardPage;
