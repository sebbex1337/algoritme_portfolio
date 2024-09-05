export function binarySearch(search, values, compareFunc) {
    let low = 0;
    let high = values.length - 1;
    let middle;

    const defaultCompare = (a, b) => a - b;
    const compare = compareFunc || defaultCompare;

    while (high >= low) {
        middle = Math.floor((high - low) / 2);
        let comparison = compare(values[middle], search);

        if (comparison === 0) {
            return middle;
        }

        if (comparison > 0) {
            low = middle - 1;
        } else {
            high = middle + 1;
        }
    }
    return -1;
}