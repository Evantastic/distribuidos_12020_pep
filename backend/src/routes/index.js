const permisos = require('./permisos')

module.exports = app => {
    app.use('/permisos', permisos)
}
