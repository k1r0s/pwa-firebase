const admin = require('firebase-admin');
const functions = require('firebase-functions');
const serviceAccount = require('./private/af-talk-00-firebase-adminsdk-uj3jl-9f3ccb7a2e');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://af-talk-00.firebaseio.com'
});

const topic = 'TODO_ADDED';

exports.registerDevice = functions.https.onRequest((req, res) => {
  if(req.method !== 'POST') return res.send(405);

  const { registrationToken } = req.body;
  const messaging = admin.messaging();

  return messaging.subscribeToTopic(registrationToken, topic).then(() =>
    res.send(200), () => res.send(500));
});

exports.unregisterDevice = functions.https.onRequest((req, res) => {
  if(req.method !== 'POST') return res.send(405);

  const { registrationToken } = req.body;
  const messaging = admin.messaging();

  return messaging.unsubscribeFromTopic(registrationToken, topic).then(() =>
    res.send(200), () => res.send(500));
});

exports.sendNotification = functions.database.ref('todos/{key}').onCreate(todoSnapshot => {
  const todo = todoSnapshot.val();
  const message = {
    notification: {
      title: 'New todo was created!',
      body: todo.text,
      click_action: "https://af-talk-00.firebaseapp.com/"
    }
  };

  const messaging = admin.messaging();

  return messaging.sendToTopic(topic, message);
})
