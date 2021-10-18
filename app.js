document.getElementById('LoginForm').addEventListener('submit', (e)=>{
    e.preventDefault();
})

firebase.auth().onAuthStateChanged((user)=>{
  if (user) {
    location.replace('welcome.html')
  }
})