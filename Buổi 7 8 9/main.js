import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
import {  
    getDatabase,
    set,
    get,
    update,
    remove,
    ref,
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";



  const firebaseConfig = {
    apiKey: "AIzaSyAXw_S777vmkHgwCMqvUFdkM8gbRt-IJmI",
    authDomain: "verbatim-20216.firebaseapp.com",
    databaseURL: "https://verbatim-20216-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "verbatim-20216",
    storageBucket: "verbatim-20216.appspot.com",
    messagingSenderId: "14346656420",
    appId: "1:14346656420:web:e4ed7a4107a141e2e4a431",
    measurementId: "G-Y8XEW0BSQG"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const database = getDatabase(app);
  console.log(app.name)
  console.log(database)

  const buttonInsert = document.getElementById("insert");
  const inputEmail =document.getElementById("inputEmail")
  const inputName = document.getElementById("inputName")
  const inputAge = document.getElementById("inputAge")
  const inputAdress = document.getElementById("inputAddress")
  
  buttonInsert.addEventListener("click", insertStudent);

  function insertStudent() {
    const idRandom = Math.floor(Math.random() + 9999) +1;
    const idUser = `${idRandom}hjhjhjhs`;

    set(ref(database, "student/" + idUser), {
        email: inputEmail.value,
        full_name: inputName.value,
        age: inputAge.value,
        address: inputAddress.value,
    })
        .then(() => {
            alert("success")
        })
        .catch((error) => console.log(error));
  }
