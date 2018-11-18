importScripts('https://www.gstatic.com/firebasejs/5.5.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.4/firebase-messaging.js');

firebase.initializeApp({
  "messagingSenderId": "1050457215990"
});

const messaging = firebase.messaging();

workbox.routing.registerRoute(
  () => true,
  workbox.strategies.staleWhileRevalidate()
);
