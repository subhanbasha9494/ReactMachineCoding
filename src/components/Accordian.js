import { useState } from "react";
import '../styles.css';
const Accordian = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const handleToggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    }
    return items.length === 0 ? <div>No items Available</div> : (
        <div className="accordian">
            {
                items.map((item, index) => {
                    return (
                        <div key={index} className="accordian-item">
                            <button className="accordian-title" type="button" onClick={() => handleToggle(index)}>{item.title}</button>

                            {index === activeIndex && (
                                <div className="content">
                                    {item.content}
                                </div>
                            )}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Accordian;
