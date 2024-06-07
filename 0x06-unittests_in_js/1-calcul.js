function calculateNumber(type='SUM', a, b=0) {
  if (type === 'SUM') {
    return (Math.round(a) +  Math.round(b))
  }
  if (type === 'SUBTRACT') {
    return (Math.round(a) - Math.round(b))
  }
  if (type === 'DIVIDE') {
    if (Math.round(b) === 0) {
      throw new Error('Division by zero');
    }

    return (Math.round(a) / Math.round(b))
  }
}
module.exports = calculateNumber;

