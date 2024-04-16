export default function hasValuesFromArray(setA, arrayObj) {
  const setB = new Set(arrayObj);
  return setB.isSubsetOf(setA);
}
