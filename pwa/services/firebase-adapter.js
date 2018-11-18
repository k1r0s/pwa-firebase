import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/messaging';
import fbConfig from '../config/dev.json';

export {
  initialize,
  configureMessaging,
  getToken,
  onCompleteUpdate,
  onChildChangedOrAdded,
  onChildRemoved,
  add,
  replace,
  update
};

const sendTokenToServer = token => console.log(token);
const SERVER_APPLICATION_KEY = 'BFkEsDWQX45vPXsjKrFomSI1qZCviU382LpPq8fHYIS5UvYUoTbA2ezyf5x4qpES8cSWXQ3Q0-2AlsSy-YKJAIs'
let database = null;
let messaging = null;

const initialize = () => {
  firebase.initializeApp(fbConfig);
  database = firebase.database();
  messaging = firebase.messaging();
}

const configureMessaging = swRegistration => {
  messaging.useServiceWorker(swRegistration);
  messaging.usePublicVapidKey(SERVER_APPLICATION_KEY);
  messaging.onTokenRefresh(() => updateToken());
}

const getToken = () => {
  return messaging.requestPermission().then(() => messaging.getToken());
}

const watch = (path, cbk, ...events) => {
  const pathRef = database.ref(path);
  events.forEach(evt =>
    pathRef.on(evt, ref => {
      const key = ref.key;
      const val = ref.toJSON();
      val && cbk(key, val);
    }))
}

const onCompleteUpdate = (path, callback) => {
  watch(path, callback, 'value');
}

const onChildChangedOrAdded = (path, callback) => {
  watch(path, callback, 'child_added', 'child_changed');
}

const onChildRemoved = (path, callback) => {
  watch(path, callback, 'child_removed');
}

const add = (path, obj) => {
  const pathRef = database.ref(path);
  return pathRef.push(obj);
}

const replace = (path, obj) => {
  const pathRef = database.ref(path);
  return pathRef.set(obj);
}

const update = (path, obj) => {
  const pathRef = database.ref(path);
  return pathRef.update(obj);
}
