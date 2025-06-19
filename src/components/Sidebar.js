import { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import '../styles.css'; // Assuming you have a CSS file for styling

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const handleMenu = () => {
        //setIsOpen(!isOpen);
    }
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button type="button" onClick={handleMenu}><Menu size={24} data-testid="menu-icon" /></button>
            {
                isOpen && (
                    <nav className="nav-menu">
                        <ul className="nav-list">
                            <li><Link to="/" className="nav-item">Home</Link></li>
                            <li><Link to="/about" className="nav-item">About</Link></li>
                            <li><Link to="/accordian" className="nav-item">Accordian</Link></li>
                            <li><Link to="/counter" className="nav-item">Counter</Link></li>
                            <li><Link to="/guess-number" className="nav-item">Guess Number</Link></li>
                            <li><Link to="/even-odd" className="nav-item">Even or Odd</Link></li>
                            <li><Link to="/toggle-password" className="nav-item">Toggle Password</Link></li>
                            <li><Link to="/progress-bar" className="nav-item">Progress Bar</Link></li>
                            <li><Link to="/dark-mode" className="nav-item">Dark Mode</Link></li>
                            <li><Link to="/password-strength" className="nav-item">Password Strength</Link></li>
                            <li><Link to="/todo-list" className="nav-item">Todo List</Link></li>
                            <li><Link to="/groupby" className="nav-item">Group By</Link></li>
                            <li><Link to="/largest-number" className="nav-item">Largest Number</Link></li>
                            <li><Link to="/vowel" className="nav-item">Count Vowels</Link></li>
                            <li><Link to="/once" className="nav-item">Once Function</Link></li>
                            <li><Link to="/curry" className="nav-item">Currying</Link></li>
                            <li><Link to="/previous" className="nav-item">Previous Value</Link></li>
                            <li><Link to="/sort" className="nav-item">Custom Sort</Link></li>
                            <li><Link to="/anagram" className="nav-item">Anagram</Link></li>
                        </ul>
                    </nav>)}
        </div>
    )
}

export default Sidebar;