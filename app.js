const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()

const port = process.env.PORT || 3000

app.use(express.static('./public'))

app.get("/static/:folder?/:file", (req, res, next) => {

    const { folder } = req.params
    const { file } = req.params

    let fileName = path.join(__dirname + '/static/' + folder + '/' + file)

    if (fs.existsSync(fileName)) {
        res.sendFile(fileName)
    } else {
        next()
    }
})

app.use((req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.listen(port)


