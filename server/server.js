//require our websocket library
var WebSocketServer = require('ws').Server;

//creating a websocket server at port 9090
var wss = new WebSocketServer({port: 9090});

//all connected to the server users
var users = {};

//when a user connects to our sever
wss.on('connection', function(connection) {

   console.log("User connected");

   //when server gets a message from a connected user
   connection.on('message', function(message) {

      var data;
      //accepting only JSON messages
      try {
         data = JSON.parse(message);
         console.log(data);
      } catch (e) {
         console.log("Invalid JSON");
         data = {};
      }
    
      if (data != null) {
          sendTo(connection, {
              type: "course-informations",
              message: data
          })
      } else {
        sendTo(connection, {
            type: "error",
            message: "Command not found: " + data.type
         });
      }
   });

   //when user exits, for example closes a browser window
   //this may help if we are still in "offer","answer" or "candidate" state
   connection.on("close", function() {

      if(connection.name) {
      delete users[connection.name];

         if(connection.otherName) {
            console.log("Disconnecting from ", connection.otherName);
            var conn = users[connection.otherName];
            conn.otherName = null;

            if(conn != null) {
               sendTo(conn, {
                  type: "leave"
               });
            }
         }
      }
   });

   //connection.send("Hello world");

});

function sendTo(connection, message) {
   connection.send(JSON.stringify(message));
}
