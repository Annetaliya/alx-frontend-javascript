export default function updateUniqueItems(list) {
  try {
    const newMap = Array.from(list.keys());

    return (newMap.filter((item) => list.get(item) === 1).map((item) => list.set(item, 100)));
  } catch (err) {
    throw new Error('Cannot process');
  }
}
