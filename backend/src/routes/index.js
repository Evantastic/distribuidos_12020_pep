const permisos = require('./permisos');
const motivos = require('./motivos');

module.exports = app => {
    app.use('/api/permisos', permisos);
    app.use('/api/motivos', motivos)
}
