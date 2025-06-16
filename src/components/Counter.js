import { useState } from "react"

const Counter = () => {
    const [count,setCount] = useState(0);

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <h1>Counter:{ count }</h1>
            <button type="button" onClick={() => setCount(count + 1)}>Increment</button>
            <button type="button" onClick={() => setCount(count - 1)}>Decrement</button>
            <button type="button" onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

export default Counter;