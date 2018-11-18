import * as FirebaseAdapter from './firebase-adapter';
import * as SWManager from './service-worker-manager';
import * as Storage from './storage-service';
import { registerDevice, unregisterDevice } from './request-service';
import * as TodoModel from '../models/todo';
import { toArray } from '../utils';

export {
  initialize,
  toggleNotifications,
  isNotificationsEnabled,
  onChange,
  removeTodo,
  checkTodo,
  clearTodos,
  addTodo
}

let todos = {};
const NOTIFICATIONS_ENABLED = 'notifications';
const DEVICE_TOKEN_KEY = 'device-key';

const initialize = () => {
  FirebaseAdapter.initialize();
  SWManager.initialize();
  SWManager.$registration.then(registration =>
    FirebaseAdapter.configureMessaging(registration));
}

const onChange = callback => {
  FirebaseAdapter.onCompleteUpdate('todos', (uid, data) =>
    callback(todos = data));
  FirebaseAdapter.onChildChangedOrAdded('todos', (uid, data) =>
    callback(TodoModel.childChangedOrAdded(uid, data, todos)));
  FirebaseAdapter.onChildRemoved('todos', uid =>
    callback(TodoModel.childRemoved(uid, todos)));
}

const addTodo = text => {
  const todo = TodoModel.buildTodo(text);
  FirebaseAdapter.add('todos', todo);
}

const removeTodo = uid => {
  FirebaseAdapter.replace(`todos/${uid}`, null);
}

const checkTodo = uid => {
  const todo = TodoModel.checkTodo(todos[uid]);
  FirebaseAdapter.replace(`todos/${uid}`, todo);
}

const clearTodos = () => {
  const nulltodos = TodoModel.clearTodos(todos);
  FirebaseAdapter.update('todos', nulltodos);
}

const isNotificationsEnabled = () => {
  return !!Storage.read(NOTIFICATIONS_ENABLED);
}

const toggleNotifications = () => {
  const deviceKey = Storage.read(DEVICE_TOKEN_KEY);
  const notificationsEnabled = Storage.read(NOTIFICATIONS_ENABLED);

  return new Promise(resolve => {
    if(!notificationsEnabled && !deviceKey) {
      FirebaseAdapter.getToken().then(token =>
        registerDevice(token).then(() => {
          Storage.write(DEVICE_TOKEN_KEY, token);
          Storage.write(NOTIFICATIONS_ENABLED, 1);
          resolve(true);
        })
      );
    } else if (!notificationsEnabled && deviceKey) {
      registerDevice(deviceKey).then(() => {
        Storage.write(NOTIFICATIONS_ENABLED, 1);
        resolve(true);
      });
    } else if (notificationsEnabled && deviceKey) {
      unregisterDevice(deviceKey).then(() => {
        Storage.write(NOTIFICATIONS_ENABLED, 0);
        resolve(false);
      });
    }
  });
}
