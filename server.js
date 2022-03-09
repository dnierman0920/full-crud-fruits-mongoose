////////////////////////////////////////////////
// import dependencies
////////////////////////////////////////////////

require('dotenv').config() // this allow us to load our env variables
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')

// we will import our fruits odel when we have it

////////////////////////////////////////////////
// Create our express application object
////////////////////////////////////////////////
const app = require('liquid-express-views')(express())

////////////////////////////////////////////////
// Middleware
////////////////////////////////////////////////

app.use(morgan('tiny'));
app.use(methodOverride("_method"));
//parese urlencoded request bodies
app.use(express.urlencoded({ extended: false }))
// to serve files from public statically
app.use(express.static('public'))

////////////////////////////////////////////////
// Server Listener
////////////////////////////////////////////////

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`app is lisetning on port ${PORT}`)
})



////////////////////////////////////////////////
// Routes
////////////////////////////////////////////////

app.get('/', (req, res) => {
    res.send('your server is running better to catch it')
})