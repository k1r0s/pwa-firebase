export { registerDevice, unregisterDevice }

const unregisterDevice = token => {
  return fetch('/rest/unregisterDevice', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      registrationToken: token
    })
  })
}

const registerDevice = token => {
  return fetch('/rest/registerDevice', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      registrationToken: token
    })
  })
}
