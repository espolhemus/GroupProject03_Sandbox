import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import BudgetIdProvider from './components/BudgetIdProvider/BudgetIdProvider.jsx';
import App from './App.jsx';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NoMatch from './pages/NoMatch.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Budget from './pages/Budget.jsx';
import Home from './pages/Home.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BudgetIdProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/:id" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </Router>
  </BudgetIdProvider>
);