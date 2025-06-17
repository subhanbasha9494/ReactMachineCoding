import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Sidebar from './components/Sidebar';
import Accordian from './components/Accordian';
import Counter from './components/Counter';
import GuessTheNumber from './components/GuessNumber';
import EvenorOdd from './components/EvenorOdd';
import Togglepassword from './components/Togglepassword';
import ProgressBar from './components/Progressbar';
import DarkMode from './components/DarkMode';
import PasswordStrength from './components/PasswordStrength';

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/accordian" element={<Accordian />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/guess-number" element={<GuessTheNumber />} />
          <Route path="/even-odd" element={<EvenorOdd />} />
          <Route path="/toggle-password" element={<Togglepassword />} />
          <Route path="/progress-bar" element={<ProgressBar />} />
          <Route path="/dark-mode" element={<DarkMode />} />
          <Route path="/password-strength" element={<PasswordStrength />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
