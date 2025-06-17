import { useState } from "react";
import { Menu } from "lucide-react";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <button type="button" onClick={handleMenu}><Menu size={24} data-testid="menu-icon" /></button>
            {
                isOpen && (
                    <nav className="nav-menu">
                        <ul className="nav-list">
                            <li className="nav-item">Home</li>
                            <li className="nav-item">Profile</li>
                            <li className="nav-item">Settings</li>
                            <li className="nav-item">Logout</li>
                        </ul>
                    </nav>)}
        </div>
    )
}

export default Sidebar;