const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()

const port = process.env.PORT || 8080

app.use(express.static('./public'))

app.use((req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.listen(port)