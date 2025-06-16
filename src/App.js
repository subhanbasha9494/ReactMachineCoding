import React from 'react';
import './App.css';
import Accordian from './components/Accordian';
import GuessTheNumber from './components/GuessNumber';

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
    </div>
  );

}

export default App;
