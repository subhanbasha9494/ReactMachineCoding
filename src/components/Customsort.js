const CustomSort = () => {
    const arry = ['a', 's', 'd', 'c', 'f', 1, 4, 5, 2, 7, 9, 3, 6, 8, 10];
    const charArray = [];
    const numArray = [];
    const customsort = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'string') {
                charArray.push(arr[i].toLowerCase());
            } else {
                numArray.push(arr[i]);
            }
        }
        for (let i = 0; i < charArray.length; i++) {
            for (let j = i + 1; j < charArray.length; j++) {
                if (charArray[i] > charArray[j]) {
                    let temp = charArray[i];
                    charArray[i] = charArray[j];
                    charArray[j] = temp;
                }
            }
        }
        for (let i = 0; i < numArray.length; i++) {
            for (let j = i + 1; j < numArray.length; j++) {
                if (numArray[i] > numArray[j]) {
                    let temp = numArray[i];
                    numArray[i] = numArray[j];
                    numArray[j] = temp;
                }
            }
        }
        return [...charArray, ...numArray];
    }
    return (
        <div>
            <h2>Custom Sort</h2>
            <p>Original Array: {JSON.stringify(arry)}</p>
            <p>Sorted Array: {JSON.stringify(customsort(arry))}</p>
        </div>
    );
};

export default CustomSort;