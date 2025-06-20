import { useState } from "react";

const Zigzag = () => {
    const [strings, setStrings] = useState('');
    const [output, setOutput] = useState('');
    const handleSubmit = () => {
        const newStrings = strings.split(',').map(str => str.trim());
        //reverse the even indexed strings
        newStrings.forEach((str, index) => {
            if (index % 2 !== 0) {
                newStrings[index] = str.split('').reverse().join('');
            }
        });
        setOutput(newStrings);
    }
    return (
        <div>
            <h1>Zigzag Pattern</h1>
            <div className="zigzag">
               <input type="text" placeholder="Enter strings like one,two,three" value={strings} onChange={(e) => setStrings(e.target.value)} />
            </div>
            <div><button type="button" onClick={handleSubmit}>Submit</button></div>
            <div className="zigzag">
                <p>Output: {output}</p>
            </div>
        </div>
        
    )
}

export default Zigzag;