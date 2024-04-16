export default function cleanSet(setObj, startString) {
  if (!startString || !(setObj instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  const index = startString.length;
  const parts = [];
  for (const item of setObj.values()) {
    if (item.startsWith(startString)) {
      const endString = item.substring(index);
      if (endString && endString !== startString) {
        parts.push(endString);
      }
    }
  }
  return parts.join('-');
}
