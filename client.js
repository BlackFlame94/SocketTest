const { io } = require("socket.io-client");

const socket = io("http://localhost:3000");

socket.on("msg", data => {
	console.log(data)
	socket.emit("msg", "Hi!")
})