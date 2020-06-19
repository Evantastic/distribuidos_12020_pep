const permisos = require('./permisos');

module.exports = app => {
    app.use('/api/permisos', permisos);
}
