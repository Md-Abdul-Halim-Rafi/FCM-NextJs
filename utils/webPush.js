import firebase from "firebase/app";
import "firebase/messaging";
import localforage from "localforage";

const firebaseCloudMessaging = {
  tokenInlocalforage: async () => {
    return localforage.getItem("fcm_token");
  },

  init: async function () {
    firebase.initializeApp({
      apiKey: "AIzaSyCYUWy85EYaycc_vooGr29VGu7C9GAYMzk",
      projectId: "cra-mui-async-seo",
      messagingSenderId: "1049570714878",
      appId: "1:1049570714878:web:f0defaefc983498fdef1af",
    });

    try {
      if ((await this.tokenInlocalforage()) !== null) {
        return false;
      }

      const messaging = firebase.messaging();
      await Notification.requestPermission();
      const token = await messaging.getToken();

      localforage.setItem("fcm_token", token);
      console.log("fcm_token", token);
    } catch (error) {
      console.error(error);
    }
  },
};

export { firebaseCloudMessaging };
