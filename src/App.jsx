import { useState } from 'react';
import './App.css';
import { Button } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayoutComponent from './Components/Layout/Layout';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutComponent />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
