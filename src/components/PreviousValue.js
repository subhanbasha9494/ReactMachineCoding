import { useState } from "react";
import usePreviousHook from "./usepreviousHook";

const PreviousValue = () => {
    const [previousValue, setPreviousValue] = useState(0);
    const handleIncrement = () => {
        // Logic to increment the value
        setPreviousValue((previousValue) => previousValue + 1);
    };

    const handleDecrement = () => {
        // Logic to decrement the value
        setPreviousValue((previousValue) => previousValue - 1);
    };
    const handleReset = () => {
        // Logic to reset the value
        setPreviousValue(0);
    };
    const previousCount = usePreviousHook(previousValue);
    return (
        <div>
            <h1>Previous Value</h1>
            <button type="button" onClick={handleIncrement}>Increment</button>
            <button type="button" onClick={handleDecrement}>Decrement</button>
            <button type="button" onClick={handleReset}>Reset</button>
            <p>Previous Value: {previousCount}</p>
            <p>Current Value: {previousValue}</p>
        </div>
    )
}
export default PreviousValue;