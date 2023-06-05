// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAXw_S777vmkHgwCMqvUFdkM8gbRt-IJmI",
    authDomain: "verbatim-20216.firebaseapp.com",
    projectId: "verbatim-20216",
    storageBucket: "verbatim-20216.appspot.com",
    messagingSenderId: "14346656420",
    appId: "1:14346656420:web:e4ed7a4107a141e2e4a431",
    measurementId: "G-Y8XEW0BSQG"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const db = getFirestore(app);

const getDataStudent = async () => {
    try{
        cónt    } catch (error) {
        console.error("có lỗi", error);
        throw error;
    }
};