import React, { createContext, useContext, useState } from 'react';

const BudgetIdContext = createContext();

export const useBudgetId = () => useContext(BudgetIdContext);

const BudgetIdProvider = ({ children }) => {
    const [budgetId, setBudgetId] = useState(null);

    return (
        <BudgetIdContext.Provider value={{ budgetId, setBudgetId }}>
            {children}
        </BudgetIdContext.Provider>
    );
};

export default BudgetIdProvider;