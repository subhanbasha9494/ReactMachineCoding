import { useState } from "react";

const GuessTheNumber = () => {
    const generateNumber = () => Math.floor(Math.random() * 100) + 1;
    const [number, setNumber] = useState(generateNumber);
    const [guess, setGuess] = useState('');
    const [attempts, setAttempts] = useState(0);


    const checkGuess = () => {
        setAttempts(attempts + 1);

        const parsedGuess = parseInt(guess);
        if (parsedGuess === '') {
            alert("Please enter a guess");
            return;
        }
        if (parsedGuess === number) {
            alert("Congratulations! You guessed the number. It took you " + attempts + " attempts.");
        } else if (parsedGuess < number) {
            alert("Too low! Try again.");
        } else {
            alert("Too high! Try again.");
        }

    }
    return (
        <div>
            <h1>Guess The Number - {number}</h1>
            <input type="number" value={guess} onChange={(e) => setGuess(e.target.value)} placeholder="Enter your guess" />
            <div>
                <button type="button" onClick={checkGuess}>Check Guess</button>
            </div>
        </div>
    )
}


export default GuessTheNumber;