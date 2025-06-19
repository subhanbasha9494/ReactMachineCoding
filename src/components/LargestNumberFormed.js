import { useEffect } from "react";

const arr = [3, 30, 34, 5, 9];

const LargestNumberFormed = () => {

    useEffect(() => {
        console.log(largestNumber(arr));
    }, []);

    const largestNumber = (arr) => {
        // Convert the array of numbers to strings
        const arrStr = arr.map(num => num.toString());

        // Sort the array based on custom comparator
        arrStr.sort((a, b) => (b + a).localeCompare(a + b));

        // Join the sorted array to form the largest number
        const largestNumber = arrStr.join('');

        // Handle the case where the largest number is '0'
        return largestNumber[0] === '0' ? '0' : largestNumber;
    }
}

export default LargestNumberFormed;