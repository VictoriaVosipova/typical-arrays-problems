exports.min = function min(array) {
  if (!array || array.length === 0) {
    return 0;
  }
  array.sort((a, b) => a - b);
  return array[0];
  return 0;
}

exports.max = function max(array) {
  if (!array || array.length === 0) {
    return 0;
  }
  array.sort((a, b) => b - a);
  return array[0];
}

exports.avg = function avg(array) {
  if (!array || array.length === 0) {
    return 0;
  }
  const sum = array.reduce((total, amount) => total + amount);
  const avg = sum / array.length;
  return avg;
}