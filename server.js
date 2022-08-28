require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')


app.set('views', path.join(__dirname, 'views'))
app.use('public/', express.static(path.join(__dirname, 'public')))


app.get('/:room', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})


const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log(`SERVING ON PORT ${PORT}`)
})

