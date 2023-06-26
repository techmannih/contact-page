

// firebase connect



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfiR4gh2GUcPv-7-vmJQ7hFG5p8AN4g1E",
  authDomain: "contactpage-d0a14.firebaseapp.com",
  databaseURL: "https://contactpage-d0a14-default-rtdb.firebaseio.com",
  projectId: "contactpage-d0a14",
  storageBucket: "contactpage-d0a14.appspot.com",
  messagingSenderId: "938480960055",
  appId: "1:938480960055:web:25723a7672374cbf9a75b2"
};


  // // Initialize Firebase
  // const app = initializeApp(firebaseConfig);



//   // initialize firebase
  firebase.initializeApp(firebaseConfig);


//   // reference your database
  var ContactPageDB = firebase.database().ref("ContactPage");



  document.getElementById("ContactPage").addEventListener("submit", submitForm);



  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 2000);
  
    //   reset the form
    document.getElementById("ContactPage").reset();
  }


  const saveMessages = (name, emailid, msgContent) => { 
    var newContactPage = ContactPageDB.push();
  
    newContactPage.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };








// // Email connect




// document.getElementById("ContactPage").addEventListener("submit", submitForm);
// function submitForm(e){
//   e.preventDefault()
//   Email.send({
//     Host:"smtp.gmail.com",
//     Username:"",
//     Password:"",
//     To:"",
//     From:document.getElementById("msgContent").value,
//     Subject:"this is the subject",
//     Body:"And this is the body"
    
//   })


//   console.log("kkkkkkkkk")

//     //   enable alert
//     document.querySelector(".alert").style.display = "block";
  
//     //   remove the alert
//     setTimeout(() => {
//       document.querySelector(".alert").style.display = "none";
//     }, 2000);
  
//     //   reset the form
//     document.getElementById("ContactPage").reset();
// }

