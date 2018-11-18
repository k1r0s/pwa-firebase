export const toArray = obj => {
  if (typeof obj === "object" && obj !== null) {
    const nobj = deepClone(obj);
    return Object.keys(nobj).reduce((acc, val) => {
      nobj[val].uid = val;
      acc.push(nobj[val]);
      return acc;
    }, []);
  }
  return [];
}

export const toDictionary = arr =>
  arr.reduce((a, b) => ({ ...a, [b.uid]: { ...b } }), {})

export const deepClone = obj => JSON.parse(JSON.stringify(obj));
