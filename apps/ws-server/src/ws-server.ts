import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

let userCount = 0;
let allSockets: WebSocket[] = [];

wss.on("connection", (socket) => {
  userCount = userCount + 1;

  console.log(`User ${userCount} is connected`);

  allSockets.push(socket);

  socket.on("message", (mesaage) => {
    // userCount = userCount + 1;
    // console.log(`User ${userCount} is connected`);

    for (let i = 0; i < allSockets.length; i++) {
      const s = allSockets[i];
      socket.send(`Message revieved from user 1${mesaage.toString()}`);
    }
    console.log(mesaage.toString());
  });

  socket.on("disconnet", () => {
    allSockets = allSockets.filter((x) => x != socket);
  });
});
