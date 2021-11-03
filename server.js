const express = require("express")
const { createServer } = require("http")
const { Server } = require("socket.io")

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, { /* options */ })

io.on("connection", (socket) => {
	socket.emit("msg", "Welcome to our socket server :)")
	socket.on("msg", data => console.log(data))
})

app.get("/", (req, res) => {
	res.end(`${process.env.NODE_ENV === 'production' ? 'Main:' : 'Dev:'} Podljipec`)
})

httpServer.listen(process.env.NODE_ENV === 'production' ? 3000 : 3010)