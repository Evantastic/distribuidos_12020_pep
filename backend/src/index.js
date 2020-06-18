const express = require('express')
const mountRoutes = require('./routes')

const app = express()
mountRoutes(app)
app.listen(process.env.EXPRESSPORT, () => {
    console.log(`Listening on ${process.env.EXPRESSPORT}`)
})
