export default function cleanSet(setObj, startString) {
  if (startString === '' || typeof startString !== 'string') return '';
  const index = startString.length;
  const parts = [];
  for (const item of setObj.values()) {
    if (typeof item === 'string' && item.startsWith(startString)) {
      const endString = item.substring(index);
      parts.push(endString);
    }
  }
  return parts.join('-');
}
