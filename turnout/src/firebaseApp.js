import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDOpToN2WAjfBqJXSsgT3zmAYfknp5iuqY",
    authDomain: "turnout-f26ca.firebaseapp.com",
    databaseURL: "https://turnout-f26ca.firebaseio.com",
    projectId: "turnout-f26ca",
    storageBucket: "turnout-f26ca.appspot.com",
    messagingSenderId: "716472894784"
  };

  export const firebaseApp = firebase.initializeApp(config)