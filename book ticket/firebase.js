

//  <script type="module"> 
    //  alert('please login or signup')
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
    import { getDatabase,set,ref,update } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";
    import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";

    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyAUbLCNjWlJ3TuQbk2f9fjWJC18ZqPb6Ww",
      authDomain: "easy-journey-f0ca4.firebaseapp.com",
      databaseURL: "https://easy-journey-f0ca4-default-rtdb.firebaseio.com",
      projectId: "easy-journey-f0ca4",
      storageBucket: "easy-journey-f0ca4.appspot.com",
      messagingSenderId: "669995326577",
      appId: "1:669995326577:web:002bce391c6bbce78dcfd0"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database=getDatabase(app);
    const auth = getAuth();

   


 const login =document.getElementById("login");
console.log(login)
document.getElementById("login").addEventListener('click',(e)=>{
    var email=document.getElementById('emaillogin').value
    var password=document.getElementById('passwordlogin').value
    // e.preventDefault()
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   
    // Signed in 
    const user = userCredential.user;
    const dt= new Date();
    // ...
    update(ref(database,'users/'+user.uid),{
    last_login:dt,
  })
  alert('user login successful')
})
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error);
    // alert(errorMessage)
   
  });
});

 onAuthStateChanged(auth, (user) => {
   if (user) {
    
     const uid = user.uid;
     // ...
   } else {
     // User is signed out
     // ...
   }
 });
{/* </script> */}