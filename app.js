const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000


app.use('/public', express.static(path.join(__dirname, '/static')))

//app.unlock('/static', express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'))
})
app.listen(port, () => console.log(`Example app listening on port port!`))

