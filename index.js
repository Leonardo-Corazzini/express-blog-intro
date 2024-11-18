const express = require('express')
const post = require('./post.js')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Server del mio blog')
})

app.get('/bacheca', (req, res) => {
    res.json(post)
})

app.listen(port, () => {
console.log(port)
})