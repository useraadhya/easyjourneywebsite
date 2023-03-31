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

signup.addEventListener('click',(e)=>{
    var email=document.getElementById('email').value
 var username=document.getElementById('username').value
  var password=document.getElementById('password').value
  var Mobile=document.getElementById('Mobile').value
  var fname=document.getElementById('fname').value
  var lname=document.getElementById('lname').value
  var date=document.getElementById('dateofbirth').value

  var occu=document.getElementById('occu').value
  var address=document.getElementById('address').value
  var country=document.getElementById('country').value
  var pincode=document.getElementById('pincode').value

    createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
// Signed in 
const user = userCredential.user;
set(ref(database,'users/'+user.uid),{
username:username,
email:email
})
alert('user created')
// ...
})
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
alert(errorMessage);
// ..
});
});




onAuthStateChanged(auth, (user) => {
if (user) {
// User is signed in, see docs for a list of available properties
// https://firebase.google.com/docs/reference/js/firebase.User
const uid = user.uid;
// ...
} else {
// User is signed out
// ...
}
});