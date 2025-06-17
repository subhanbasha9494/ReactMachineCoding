import { useState } from "react";

const PasswordStrength = () => {
    const [strength, setStrength] = useState('');
    const [password, setPassword] = useState('');

    const handleEvent = (e) => {
       const checks = [
          password.length >= 8, // Length check
          /[A-Z]/.test(password), // Uppercase letter check
          /[a-z]/.test(password), // Lowercase letter check
          /[0-9]/.test(password), // Digit check
          /[A-Za-z0-9]/.test(password), // Alphanumeric check
       ]

       const passed = checks.filter(Boolean).length;
       if (passed === 1) {
           setStrength('Level 1');
       } else if (passed >= 2 && passed <= 3) {
           setStrength('Level 2');
       } else if( passed >= 4 && passed <= 5) {
           setStrength('Level 3');
       }
    }

    return (
        <div>
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleEvent}>Check Strength</button>
            {strength}
        </div>
    )
}

export default PasswordStrength;