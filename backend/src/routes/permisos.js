const Router = require('express-promise-router');
const { DateTime } = require('luxon');
const db = require('../db');
const data = require('../data/motivos.json');

const router = new Router();

module.exports = router;

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { rows } = await db.query('SELECT * FROM permisos WHERE id = $1', [id]);
        const now = DateTime.local().setZone('America/Santiago').toFormat('y-LL-dd HH:mm');
        const limit = DateTime.fromFormat(rows[0].valido_hasta, 'y-LL-dd HH:mm').toFormat('y-LL-dd HH:mm');
        const is_valid = now < limit;
        res.status(200).send({ es_valido: is_valid, hora_actual: now, hora_limite: limit });
    } catch(err) {
        res.status(404).send('');
    }
});

router.post('/', async (req, res) => {
    try {
        const { body } = req;
        const query = 'INSERT INTO permisos' +
            ' (id_persona, region, comuna, direccion, motivo, hora_emision, valido_hasta)' +
            ' VALUES($1, $2, $3, $4, $5, $6, $7)' +
            ' RETURNING id, hora_emision, valido_hasta';
        const values = [
            body.id_persona,
            body.region,
            body.comuna,
            body.direccion,
            body.motivo,
            DateTime.local().setZone('America/Santiago').toFormat('y-LL-dd HH:mm'),
            DateTime.local().setZone('America/Santiago').plus({ hours: data[body.motivo].ventana }).toFormat('y-LL-dd HH:mm')
        ];
        const { rows } = await db.query(query, values);
        res.status(200).send(rows[0]);
    } catch (err) {
        res.status(500).send('');
    }
});
