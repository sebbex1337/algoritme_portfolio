import { binarySearch } from "./binarysearch.js";

function compareFunction(a, b) {
    return a - b;
}

const values = [21, 22, 23, 25, 27, 28, 29, 31, 32, 34, 35];

let index = binarySearch(25, values, compareFunction);
console.log(`Tallet 25 fundet på index: ${index}`);
