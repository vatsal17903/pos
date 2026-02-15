import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import POS from './pages/POS';
import Sales from './pages/Sales';
import Customers from './pages/Customers';
import Settings from './pages/Settings';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Navbar />
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/pos" element={<POS />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/settings" element={<Settings />} />

              {/* Other modules placeholders */}
              <Route path="/purchases" element={<div className="fade-in"><h1 className="page-title">Purchases</h1><div className="card">Purchase module content...</div></div>} />
              <Route path="/reports" element={<div className="fade-in"><h1 className="page-title">Reports</h1><div className="card">Report module content...</div></div>} />
              <Route path="/quotations" element={<div className="fade-in"><h1 className="page-title">Quotations</h1><div className="card">Quotation module content...</div></div>} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
