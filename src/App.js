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
import ChipsInput from './components/ChipInput';
import GroupBy from './components/GroupBy';
import LargestNumberFormed from './components/LargestNumberFormed';
import CountVowels from './components/CountVowels';
import Oncefn from './components/Oncefn';
import Currying from './components/Currying';
import PreviousValue from './components/PreviousValue';
import CustomSort from './components/Customsort';
import Anagram from './components/Anagram';

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
          <Route path="/todo-list" element={<ChipsInput />} />
          <Route path="/groupby" element={<GroupBy />} />
          <Route path="/largest-number" element={<LargestNumberFormed />} />
          <Route path="/vowel" element={<CountVowels />} />
          <Route path="/once" element={<Oncefn  />} />
          <Route path="/curry" element={<Currying  />} />
          <Route path="/previous" element={<PreviousValue  />} />
          <Route path="/sort" element={<CustomSort />} />
          <Route path="/anagram" element={<Anagram />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
