import Footer from './components/Common/Footer';
import Header from './components/Common/Header'
import './App.css';
import MainComponent from './components/LandingPage/MainComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/Dashboard';
import HomePage from './pages/Home';

function App() {
  return (
    <div>
 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/dashboard" element={<DashboardPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
