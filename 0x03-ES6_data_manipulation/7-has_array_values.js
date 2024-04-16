export default function hasValuesFromArray(setA, arrayObj) {
  const myFunction = (value) => setA.has(value);
  return arrayObj.every(myFunction);
}
