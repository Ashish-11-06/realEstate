import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayoutComponent from './Components/Layout/Layout';

// Pages
import Dashboard from './Pages/Dashboard';
import Installments from './Pages/Installments';
import ProjectLocation from './Pages/ProjectLocation';
import Projects from './Pages/Projects';
import Customers from './Pages/Customers';
import Vendors from './Pages/Vendors';
import Sales from './Pages/Sales';
import Employee from './Pages/Employee';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutComponent />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="installments" element={<Installments />} />
          <Route path="project-location" element={<ProjectLocation />} />
          <Route path="projects" element={<Projects />} />
          <Route path="customers" element={<Customers />} />
          <Route path="vendors" element={<Vendors />} />
          <Route path="sales" element={<Sales />} />
          <Route path="employee" element={<Employee />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
