import { useState } from "react";

const DarkMode = () => {

    const [darkMode, setDarkMode] = useState(false);

    const handleToggle = (event) => {
        setDarkMode(!darkMode);
    }
    return (
        <div style={{ backgroundColor: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#000', padding: '20px', borderRadius: '5px' }}>
            <input type="checkbox" checked={darkMode} id="darkModeToggle" onChange={handleToggle} />
            <label htmlFor="darkModeToggle">{darkMode ? 'Dark Mode' : 'Light Mode'}</label>
        </div>
    )
}

export default DarkMode;