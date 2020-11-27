/* global importScripts, firebase */
importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: process.env.API_KEY,
  projectId: process.env.PROJECT_ID,
  messagingSenderId: process.env.MESSEGNING_SENDER_ID,
  appId: process.env.APP_ID,
});

firebase.messaging();
