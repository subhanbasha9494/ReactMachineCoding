import { useState } from "react";

const EvenorOdd = () => {
    const [number, setNumber] = useState("");
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const checkEvneorOdd = () => {
        setResult(null);
        setLoading(true);
        setTimeout(() => {
            const parsedNumber = parseInt(number, 10);
            if (isNaN(parsedNumber)) {
                setResult("Please enter a valid number");
                setLoading(false);
                return;
            } else {
                setResult(`The number ${parsedNumber} is ${parsedNumber % 2 === 0 ? 'Even' : 'Odd'}`);
                setLoading(false);
            }
        }, 2000);
    }
    return (
        <div>
            <h1>Even or Odd</h1>
            <input type="text" placeholder="Enter a number" id="numberInput" value={number} onChange={(e) => setNumber(e.target.value)} />
            <button type="button" onClick={checkEvneorOdd}>Check</button>

            {loading ? (<p>Loading...</p> ): result != null ? <div id="result">{result}</div> : null}
        </div>
    )
}

export default EvenorOdd;