//  Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCN3yjwRF3txiAY76WsnZoAZoCA9K1vqzo",
    authDomain: "login-form-b012e.firebaseapp.com",
    projectId: "login-form-b012e",
    storageBucket: "login-form-b012e.appspot.com",
    messagingSenderId: "355311502585",
    appId: "1:355311502585:web:069e66710f7f7450f20e28"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



document.getElementById('LoginForm').addEventListener('submit', (e)=>{
    e.preventDefault();
})