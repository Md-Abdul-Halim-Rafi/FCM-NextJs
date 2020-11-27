/* global importScripts, firebase */
importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyCYUWy85EYaycc_vooGr29VGu7C9GAYMzk",
  projectId: "cra-mui-async-seo",
  messagingSenderId: "1049570714878",
  appId: "1:1049570714878:web:f0defaefc983498fdef1af",
});

firebase.messaging();
