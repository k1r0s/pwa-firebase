export {
  childChangedOrAdded,
  childRemoved,
  buildTodo,
  clearTodos,
  checkTodo
};

const childChangedOrAdded = (uid, data, todos) => {
  return todos = { ...todos, [uid]: data };
}

const childRemoved = (uid, todos) => {
  return todos = { ...todos, [uid]: undefined };
}

const buildTodo = text => {
  return { text, timestamp: Date.now(), checked: false };
}

const checkTodo = obj => {
  return { ...obj, checked: !obj.checked };
}

const clearTodos = todos => {
  return Object.keys(todos).reduce((ntodos, uid) => {
    if(todos[uid].checked) ntodos[uid] = null;
    return ntodos
  }, {})
}
