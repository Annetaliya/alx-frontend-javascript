export default function divideFunction(numerator, denominator) {
  try {
    const result = numerator / denominator;
    if (denominator === 0) {
      throw new Error();
    }
    return result;
  } catch (err) {
    throw Error('cannot divide by 0');
  }
}
