const { Pool } = require('pg')
const pool = new Pool()

pool.query('SELECT * FROM permisos;', (err, res) => {
    console.log(err, res)
    pool.end()
})

