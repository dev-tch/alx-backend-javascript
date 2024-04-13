export default function iterateThroughObject(reportWithIterator) {
  let text = '';
  const size = reportWithIterator.length;
  for (const idxWithValue of reportWithIterator.entries()) {
    if (idxWithValue[0] < size - 1) {
      text += `${idxWithValue[1]} | `;
    } else {
      text += idxWithValue[1];
    }
  }
  return text;
}
