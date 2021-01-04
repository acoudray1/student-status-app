//require our websocket library
var WebSocketServer = require('ws').Server;

//creating a websocket server at port 9090
var wss = new WebSocketServer({port: 9090});

//all connected to the server users
var usersSocket = [];

//when a user connects to our sever
wss.on('connection', function(connection) {

   usersSocket.push(connection);
   console.log("User connected. \n Users connected count: " + usersSocket.length);

   //when server gets a message from a connected user
   connection.on('message', function(message) {

      var data;
      //accepting only JSON messages
      try {
         data = JSON.parse(message);
      } catch (e) {
         console.log("Invalid JSON");
         data = {};
      }
      
      switch(data.type) {
        case "course-informations":
            usersSocket.forEach(element => {
                sendTo(element, {
                    type: "course-informations",
                    message: data.message
                })
            });
            break;
        default:
            sendTo(connection, {
                type: "error",
                message: "Command not found: " + data.type
            });
            break;
      }
   });

   //when user exits, for example closes a browser window
   //this may help if we are still in "offer","answer" or "candidate" state
    connection.on("close", function() {
        usersSocket.splice(usersSocket.indexOf(connection), 1);
        console.log("User deconnected. \n Users connected count: " + usersSocket.length);
    });

   //connection.send("Hello world");

});

function sendTo(connection, message) {
   connection.send(JSON.stringify(message));
}
