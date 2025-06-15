import { useState } from "react";

const Accordian = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const handleToggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    }
    return items.length === 0 ? <div>No items Available</div> : (
        <div>
            {
                items.map((item, index) => {
                    return (
                        <div key={index}>
                            <button type="button" onClick={() => handleToggle(index)}>{item.title}</button>

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
