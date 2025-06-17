import { useState } from 'react'
const ProgressBar = () => {

    const [progressVal, setProgressVal] = useState(0);

    const handlePlusBy10 = () => {
        setProgressVal(prev => Math.min(prev + 10, 100));
    }

    const handleMinusBy10 = () => {
        setProgressVal(prev => Math.max(prev - 10, 0));
    }

    const getBarColor = () => {
        if (progressVal < 30) {
            return 'red';
        } else if (progressVal < 80) {
            return 'yellow';
        } else {
            return 'green';
        }
    }
    return (
        <div style={{ width: '300px', margin: '20px auto' }}>
            <div style={{ height: '30px', backgroundColor: '#f3f3f3', borderRadius: '10px', overflow: 'hidden' }}>
                <div className="progress-bar" style={{ height: '100%', width: `${progressVal}%`, backgroundColor: getBarColor() }}>
                    <span style={{ color: '#fff', padding: '5px', fontWeight: 'bold' }}>{progressVal}%</span>
                </div>
            </div>
            <button onClick={handlePlusBy10}>+10</button>
            <button onClick={handleMinusBy10}>-10</button>
        </div>
    )
}

export default ProgressBar;