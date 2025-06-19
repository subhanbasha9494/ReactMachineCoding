import { useEffect } from "react";

const GroupBy = () => {
    const data = [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 30 },
        { name: 'Bob', age: 28 },
        { name: 'Alice', age: 30 },
    ];
    useEffect(() => {
      console.log(groupBy(data, 'age'));
    },[])

    const groupBy = (data, key) => {
        return data.reduce((acc, curr) => {
            const groupKey = curr[key];
            if (!acc[groupKey]) {
                acc[groupKey] = [];
            }
            acc[groupKey].push(curr);
            return acc;
        }, {});
    }

    return (
        <div>
            <h1>GroupBy</h1>
        </div>
    )
}

export default GroupBy;