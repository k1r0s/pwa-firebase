const KEY_STATE = 'af-talk-storage';

export { read, write, remove };

const read = key => {
  return JSON.parse(localStorage.getItem(key));
}

const write = (key, val) => {
  let serializedValue = JSON.stringify(val);
  return localStorage.setItem(key, serializedValue);
}

const remove = key => {
  return localStorage.removeItem(key);
}
