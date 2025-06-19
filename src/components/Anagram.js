const Anagram = () => {
    const isAnagram = (str1, str2) => {
        if (str1.length !== str2.length) {
            return false;
        }
        const sortedStr1 = str1.split('').sort().join('');
        const sortedStr2 = str2.split('').sort().join('');
        return sortedStr1 === sortedStr2;
    }
    return (
        <div className="anagram">
            <h1>Anagram</h1>
            <p>isAnagram('listen', 'silent') : {isAnagram('listen', 'silent').toString()}</p>
            <p>isAnagram('hello', 'world') : {isAnagram('hello', 'world').toString()}</p>
        </div>
    )
}

export default Anagram;