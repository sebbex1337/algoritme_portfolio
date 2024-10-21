let iterations = 0;

function binarySearchRecursive(search, values, start, end, comparator) {
  // Brug default compare funktion hvis der ikke er givet en
  const defaultComparator = (a, b) => (a < b ? -1 : a > b ? 1 : 0);
  const compare = comparator || defaultComparator;

  // Tæl iterationer op hver gang funktionen kaldes
  iterations++;
  console.log(`Number of iterations: ${iterations}`);

  // Hvis starten er større end slutningen så findes elementet ikke
  if (start > end) {
    return -1;
  }

  // Find midten af arrayet ved at halvere det selvfølgelig
  const middle = Math.floor((start + end) / 2);

  // Sammenlign elementet i midten med søgeværdien
  const comparison = compare(search, values[middle]);

  // Hvis elementet i midten er det vi leder efter så returner indexet
  if (comparison === 0) {
    return middle;
  }

  // Hvis elementet i midten er mindre end søgeværdien så søg i venstre side af arrayet
  // Sæt end parameter til at være middle værdien - 1
  if (comparison < 0) {
    return binarySearchRecursive(search, values, start, middle - 1, comparator);
  }

  // Hvis elementet i midten er større end søgeværdien så søg i højre side af arrayet
  // Sæt start parameter til at være middle værdien + 1
  return binarySearchRecursive(search, values, middle + 1, end, comparator);
}

const values = [21, 22, 23, 25, 27, 28, 29, 31, 32, 34, 35];
iterations = 0;
let index = binarySearchRecursive(35, values, 0, values.length - 1);
console.log(`Tallet 35 fundet på index: ${index}, Iterationer: ${iterations}`);
