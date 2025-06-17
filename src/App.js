import React from 'react';
import './App.css';
import Accordian from './components/Accordian';
import GuessTheNumber from './components/GuessNumber';
import Counter from './components/Counter';
import EvenorOdd from './components/EvenorOdd';
import Sidebar from './components/Sidebar';
import Togglepassword from './components/Togglepassword';

function App() {
  const items = [
    {
      title: "JavaScript Basics",
      content: "Learn variables, functions, and loops in JavaScript."
    },
    {
      title: "React.js Overview",
      content: "Understand components, state, and props in React."
    },
    {
      title: "Node.js",
      content: "Basics of server-side development with Node.js."
    },
    {
      title: "Full-Stack Development",
      content: "Build full-stack apps with React and Node.js."
    },
  ];
  return (
    <div className="App">
      <h1>Machine Coding Task</h1>
      <Accordian items={items} />
      <h3>Guess the number</h3>
      <GuessTheNumber />
      <h3>Counter</h3>
      <Counter />
      <h4>Even Or Odd</h4>
      <EvenorOdd />
      <h4>Sidebar</h4>
      <Sidebar />
      <h4>Toggle Password</h4>
      <Togglepassword />
    </div>
  );

}

export default App;
