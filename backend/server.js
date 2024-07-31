import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: "http://localhost:3000",
});

const PORT = process.env.PORT || 8080;
const users = {};
const rooms = [];

io.on("connection", (socket) => {
  users[socket.id] = {
    socket: socket,
    online: true,
  };

  console.log(users[socket.id]);

  socket.on("request_to_connect", (data) => {
    const currentUser = users[socket.id];
    currentUser.playerName = data.playerDetail.name;
    console.log(currentUser);
  });

  socket.on("disconnect", function () {
    const currentUser = users[socket.id];
    currentUser.online = false;
    currentUser.playing = false;

    for (let index = 0; index < rooms.length; index++) {
      const { player1, player2 } = rooms[index];

      if (player1.socket.id === socket.id) {
        player2.socket.emit("opponentLeftMatch");
        break;
      }

      if (player2.socket.id === socket.id) {
        player1.socket.emit("opponentLeftMatch");
        break;
      }
    }
  });
});

server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
