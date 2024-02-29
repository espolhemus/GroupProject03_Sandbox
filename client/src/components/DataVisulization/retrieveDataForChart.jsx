import React, { useEffect, useState } from 'react';
import { useBudgetId } from '../BudgetIdProvider/BudgetIdProvider';
import { useQuery } from '@apollo/client';
import { QUERY_BUDGET } from '../../utils/queries';
import BarChart from './renderBarChart';

const DataForChart = () => {
    const { budgetId } = useBudgetId();
    const [totalBudget, setTotalBudget] = useState(0);

    // Fetch data from the database based on the budget_id
    const { loading, data } = useQuery(QUERY_BUDGET, {
        variables: { id: budgetId },
    });

    useEffect(() => {
      if (data && data.budget) {
          setTotalBudget(data.budget.total);
      }
  }, [data.budget]);

    return (
        <div>
            <h1>Budget Details</h1>
            {loading ? (
                <p>Loading data...</p>
            ) : (
                <>
                    <p>Total Budget: {totalBudget}</p>
                    {data && data.budget && <BarChart data={data.budget} />}
                </>
            )}
        </div>
    );
};

export default DataForChart;