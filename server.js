require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const http = require('http')
const server = http.createServer(app)
const { Server } = require("socket.io");
const io = new Server(server);


app.set('views', path.join(__dirname, 'views'))
app.use('public/', express.static(path.join(__dirname, 'public')))


io.on('connection', (socket) => {
    console.log('a user connected', socket.id);
    socket.on('disconnect', () => {
        console.log('user disconnected', socket.id);
    });
});


app.get('/:room', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})


const PORT = process.env.PORT;
server.listen(PORT, () => {
    console.log(`SERVING ON PORT ${PORT}`)
})

