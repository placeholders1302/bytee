import express from "express";
import { Server } from "socket.io";
import { createServer } from "vite";

const port = 3000;
const app = express();
const server = createServer(app);
const io = new Server(server)

app.get("/",(req,res)=>{
    res.send("Hello World!")
})

io.on("connection",(socket)=>{
    console.log("User connected!")
    console.log(`Id: ${socket.id}`)
})

app.listen(port,()=>{
    console.log(`server is listening on port: ${port}`)
})