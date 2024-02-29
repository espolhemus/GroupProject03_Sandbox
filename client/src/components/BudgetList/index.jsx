import React from 'react';
import { Link } from 'react-router-dom';
// import { useBudgetId } from './BudgetIdProvider';
import { useBudgetId } from './BudgetIdProvider/BudgetIdProvider';

const BudgetList = (props) => {
    const { setBudgetId } = useBudgetId();
    var budgets = Object.values(props)[0];

    return (
        <>
            {budgets ? (
                budgets.map((budget, index) => (
                    <div key={index}>
                        <Link
                            to={`/home/${budget._id}`}
                            onClick={() => setBudgetId(budget._id)}
                        >
                            Created on: {budget.month}/{budget.year} Budget Total: {budget.total}
                        </Link>
                    </div>
                ))
            ) : (
                <div>No Budgets</div>
            )}
        </>
    );
};

export default BudgetList;
