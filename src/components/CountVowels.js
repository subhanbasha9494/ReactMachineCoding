import { useEffect } from "react";

const CountVowels = () => {
    const str = "Aeojjj";
    // useEffect(() => {
    //     console.log(CountVowels(str));
    // }, []);

    const count = (str) => {
        // const vowels = str.toLowerCase();
        // const matches = vowels.match(/[aeiou]/g);
        // return matches ? matches.length : 0;

        let count = 0;
        for (let char of str.toLowerCase()) {
            if ('aeiou'.includes(char)) {
                count++;
            }
        }
        return count;
    }
    // Define a regular expression to match vowels
    return (
        <div>
            <h1>Count Vowels</h1>
            {count(str)}
        </div>
    )
}

export default CountVowels;