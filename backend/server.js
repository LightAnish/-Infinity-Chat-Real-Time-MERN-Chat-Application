import { Server } from "socket.io";
import http from "http";
import express from "express";
const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "https://infinity-chat-real-time-mern-chat-application-tpiv.vercel.app",
    credentials: true,
    methods: ["GET", "POST"],
  },
});

let users = {}

const getReceiverUserId = (userId) => {
  return users[userId]
}

io.on("connection", (socket) => {
    
    const userId = socket.handshake.query.id;
    if(userId){
        users[userId] = socket.id;
    }
    
    io.emit('getOnlineUsers', Object.keys(users))
    
    

    socket.on("disconnect", () => {
        console.log("User disconnected");
        if(userId){
            delete users[userId];
            io.emit("getOnlineUsers", Object.keys(users));
        }
    })
})

export { io, server ,app,getReceiverUserId}
