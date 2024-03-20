import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import './App.css';
import HeaderNav from './home_page_components/header_navbar';
import CardSlider from './home_page_components/CardSlider';
import LoginPage from './login_page/login_page.js';

function App() {
  return (
    <Router>
      <div>
        <HeaderNav />
        {/* Use Routes component instead of Route */}
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<CardSlider />} /> {/* Assuming CardSlider is the component for the home page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
