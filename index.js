const express = require("express")
const path = require("path")
const http =require("http")
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io")
const port = 9000;

const io = new Server(server);
app.use(express.static(path.resolve("./public")));
app.get("/",(req,res)=>{
    res.sendFile("/public/index.html");
})

//socket io 
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
  });
server.listen(port,()=>{
    console.log("my server is created at port:="+ port)
})