export const sum = a => a.reduce((prev, current) => prev + parseFloat(current), 0);

export const avg = (a) => {
  const total = a.reduce((prev, current) => prev + parseFloat(current), 0);
  return total / a.length;
};

export const min = a => a.reduce((prev, current) => Math.min(prev, parseFloat(current)));

export const max = a => a.reduce((prev, current) => Math.max(prev, parseFloat(current)));

export const substract = a => parseFloat(a[0]) - parseFloat(a[1]);

export const multiplication = a => a.reduce((prev, current) => prev * parseFloat(current), 1);

export const divide = a => parseFloat(a[0]) / parseFloat(a[1]);

const mathFunc = {
  sum,
  min,
  avg,
  max,
  substract,
  multiplication,
  divide,
};

export default mathFunc;
