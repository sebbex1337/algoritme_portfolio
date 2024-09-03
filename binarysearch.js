function binarySearch(search, values) {
    let low = 0;
    let high = values.length - 1;
    let mid;
    while (high >= low) {
        let middle = Math.floor((high - low) / 2);
        if (values[middle] == search) {
            return middle;
        }

        if (values[middle] > search) {
            low = middle - 1;
        } else {
            high = middle + 1;
        }
    }
    return -1;
}

const values = [21, 22, 23, 25, 27, 28, 29, 31, 32, 34, 35];

let index = binarySearch(25, values);
console.log(`Tallet 25 fundet på index: ${index}`);
