$(document).ready(function(){
    $("#myBtn").click(function(){
      $("#myModal").modal();
    });
  });

  // Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth()
const database = firebase.database()