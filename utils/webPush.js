import firebase from "firebase/app";
import "firebase/messaging";
import localforage from "localforage";

const firebaseCloudMessaging = {
  tokenInlocalforage: async () => {
    return localforage.getItem("fcm_token");
  },

  init: async function () {
    firebase.initializeApp({
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
      messagingSenderId: process.env.NEXT_PUBLIC_MESSEGNING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_APP_ID,
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
