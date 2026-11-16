import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header.jsx';
import ThreeScene from './components/ThreeScene.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<><ThreeScene /><div className="auth-shade" /><Header /><LoginPage /></>} />
        <Route path="/register" element={<><ThreeScene /><div className="auth-shade" /><Header /><RegisterPage /></>} />
        <Route path="/home" element={<><Header /><HomePage /></>} />
        <Route path="/about" element={<><Header /><AboutPage /></>} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  );
}