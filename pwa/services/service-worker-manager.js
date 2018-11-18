export {
  initialize,
  $registration
}

const PATH = 'sw.js';
let $registration = null;

const initialize = () => {
  if ('serviceWorker' in navigator) install();
  else throw new Error('service worker not supported');

}

const install = () => {
  $registration = navigator.serviceWorker.register(PATH);
}
