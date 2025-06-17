import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react';
const Togglepassword = () => {
    const [ispwdVisible, setIspwdVisible] = useState(false);
    const handleClick = () => {
        setIspwdVisible(!ispwdVisible);
    }
    return (
        <div>
            <input type={ispwdVisible ? 'text' : 'password'} id="togglePassword" />
            <span onClick={handleClick}>{ispwdVisible ? <Eye size={18}/> : <EyeOff size={18} />}</span>
        </div>
    )
}

export default Togglepassword;