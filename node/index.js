const express = require('express')
const mongoose = require('mongoose')
const cros = require('cros')

const app = express();

app.listen(5173, () => {
    console.log('Server is running on port 5173 :)')
})

app.get('/', (req, res) => {
    res.send('Hello World')
})