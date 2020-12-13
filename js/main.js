// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCyC5uzjLo5ogv0Frqz_M0XlQXo0xu2dgA",
    authDomain: "registration-64a21.firebaseapp.com",
    projectId: "registration-64a21",
    storageBucket: "registration-64a21.appspot.com",
    messagingSenderId: "403768996944",
    appId: "1:403768996944:web:d36f17815ef7cc38f84d55"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var messagesRef = firebase.database().ref('registration');


document.getElementById('registerForm').addEventListener('submit', submitForm);
function submitForm(e){
    e.preventDefault();
    
    var name = getInputVal('name');
    var phone = getInputVal('phone');
    var email = getInputVal('email');
    var address = getInputVal('address');

    var profit = document.querySelector('input[name="pr"]:checked').value;
    var idea = document.querySelector('input[name="idea"]:checked').value;

    
    var statement = getInputVal('statement');
    var description = getInputVal('description');
    var how = getInputVal('how');
    var goal = getInputVal('goal');

    saveMessages(name , phone , email, address , profit , idea , statement , description , how , goal);

    document.querySelector('.alert').style.display="block";

    setTimeout(function(){
        document.querySelector('.alert').style.display="none";
    },5000);

    document.getElementById('registerForm').reset();
  
}

///function to get values of form
function getInputVal(id){
  return document.getElementById(id).value;
}

//save to firebase
function saveMessages(name,phone,email,address,profit,idea,statement,description,how,goal){
  var newMessagesRef = messagesRef.push();
  newMessagesRef.set({
    name: name,
    phone: phone,
    email : email,
    address : address,
    profit : profit,
    idea : idea,
    statement : statement ,
    description : description,
    how : how,
    goal : goal
  })
}