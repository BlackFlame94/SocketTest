const { io } = require("socket.io-client");

const socket = io("https://api.shard-casino.com");

socket.on("msg", data => {
	console.log(data)
	socket.emit("msg", "Hi!")
})