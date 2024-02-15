const express = require('express')
const app = express()
const Package = require('./package.json')
const { name, version, description } = Package;
const port = 3000

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/hc', (req, res) => {
    res.status(200);
    res.send({ name, version, description})
})

app.listen(port, () => {
    console.log(`heron app listening on port ${port}`)
})