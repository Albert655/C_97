
// Your web app's Firebase configuration

const firebaseConfig = {

      apiKey: "AIzaSyA1yozFrMMavlZy3KIWV0P-VU6I9ULUu8k",
    
      authDomain: "letschat-2dc1e.firebaseapp.com",
    
      databaseURL: "https://letschat-2dc1e-default-rtdb.firebaseio.com",
    
      projectId: "letschat-2dc1e",
    
      storageBucket: "letschat-2dc1e.appspot.com",
    
      messagingSenderId: "979835943922",
    
      appId: "1:979835943922:web:73595a6528aede2157c96b"
    
    };
    
    
    // Initialize Firebase
    
    const app = initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
        console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+room_name+"</div><hr>"
        document.getElementById("output").innerHTML += row;
        //End code
        });});}
  getData();
  
  function addRoom()
  {
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        });
        localStorage.setItem("room_name", room_name);
        window.location = "kwitter_page.html";
  }
  function redirectToRoomName(name)
  {
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
  }
  