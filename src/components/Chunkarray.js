import React from "react";

const Chunkarray = () => {
    const data = [1, 2, 3, 4, 5];
    const chunkArray = (array, size) => {
        const chunked = [];
        for (let i = 0; i < array.length; i += size) {
            chunked.push(array.slice(i, i + size));
        }
        return chunked;
    };
    const chunks = chunkArray(data, 2);
    return (
        <div>
            <h1>Chunk Array: {JSON.stringify(chunks)}</h1>
        </div>
    );
}

// The i += size statement is the increment expression in the for loop that controls how the loop advances through the array.

// What it does:

// Increases the loop variable i by the value of size in each iteration

// This is shorthand for i = i + size

// Why it's used:
// Instead of incrementing by 1 (i++), it jumps by size positions to create chunks of the specified size.

// Example with your data:

// data = [1, 2, 3], size = 5

// Iteration 1: i = 0, slice [0, 5) → gets [1, 2, 3]

// Next: i += 5 → i = 5

// Loop ends because 5 >= 3 (array length)

// With different size:
// If size = 2 and data = [1, 2, 3, 4, 5, 6]:

// Iteration 1: i = 0, slice [0, 2) → [1, 2]

// Iteration 2: i = 2, slice [2, 4) → [3, 4]

// Iteration 3: i = 4, slice [4, 6) → [5, 6]

// This creates the chunking effect by skipping ahead by the chunk size rather than processing elements one by one.



export default Chunkarray;
