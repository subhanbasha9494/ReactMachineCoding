import { useState } from 'react'
const ChipsInput = () => {
    const [chips, setChips] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            setChips([...chips, inputValue]);
            setInputValue('');
        }
    };
    return (
        <div>
            <input type="text" placeholder="Add a chip" value={inputValue} onKeyDown={handleKeyDown} onChange={(e) => setInputValue(e.target.value)} />
            <div>
                {chips.map((chip, index) => {
                    return (
                        <div key={index} style={{ display: 'inline-block', margin: '5px', padding: '5px', border: '1px solid #ccc', borderRadius: '5px' }}>
                            <span>{chip}</span>
                            <button onClick={() => {
                                setChips(chips.filter((c) => c !== chip))
                            }}>X</button>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default ChipsInput;