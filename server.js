require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')


app.set('views', path.join(__dirname, 'views'))
app.use(express.json())
app.use(express.static('public'))


app.get('/', (req, res) => {
    res.sendFile('public/index.html');
})


const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log(`SERVING ON PORT ${PORT}`)
})

