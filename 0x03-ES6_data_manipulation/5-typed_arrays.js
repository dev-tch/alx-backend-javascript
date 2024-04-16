export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  const newBuffer = new ArrayBuffer(length);
  const viewBuffer = new Int8Array(newBuffer);
  viewBuffer[position] = value;
  return newBuffer;
}
