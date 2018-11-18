#!/usr/bin/env bash

curl -X POST -H "Authorization: key=AAAA9JQhE_Y:APA91bFXZBUvi4Iy3XaWcNQQZyr8oEhTls2fBNcR5sTuDzyHERSo_c8x7wj4Xqz6ovy-49pv2fmPLZi8_VkC4qqhQu3fcsczPKwepVo6JrIMjCUqKY2_n5SMuATmhpBaExNaGm6NdV4w" -H "Content-Type: application/json" -d '{
  "notification": {
    "title": "Portugal vs. Denmark",
    "body": "5 to 1",
    "icon": "firebase-logo.png",
    "click_action": "http://google.com"
  },
  "to": "dWokMKJEm1s:APA91bFUCq4kyovuQo57J9MuvRKrSP6fFxLi1D8cr7zGUxtaBNiqxPc3qBZXZ6uGuYeSQ6wD1JeCzYC2mNDK_78S8-itgKN3GRbDZiuOm1uGaF-QMODfIY0Y6X3GsUdSVB2Sntzw-Lnp"
}' "https://fcm.googleapis.com/fcm/send"
