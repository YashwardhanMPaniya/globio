import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './pages/Dashboard';
import Tutorial from './pages/Tutorial';
import MockTests from './pages/MockTests';

const TopbarWithRoute = () => {
  const location = useLocation();
  if (location.pathname === '/mock-tests') {
    return <Topbar title="Test Series Section" searchPlaceholder="Search for exams" />;
  }
  if (location.pathname === '/tutorial') {
    return <Topbar title="Explore Tutorials" searchPlaceholder="Search for tutorials" />;
  }
  // Hide Topbar for dashboard and other routes
  return null;
};

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 pl-64">
          <TopbarWithRoute />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tutorial" element={<Tutorial />} />
            <Route path="/mock-tests" element={<MockTests />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;