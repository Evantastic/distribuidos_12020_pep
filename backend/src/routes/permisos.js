const Router = require('express-promise-router');
const { DateTime } = require('luxon');
const db = require('../db');

const router = new Router();

module.exports = router;

router.get('/:id', async (req, res) => {
    const { id } = req.params
    console.log();
    const { rows } = await db.query('SELECT * FROM permisos WHERE id_persona = $1',  [ id ]);
    res.status(200).send(rows[0]);
});

router.post('/', async (req, res) => {
    const { body }  = req;
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
        DateTime.local().setZone('America/Santiago').plus({ hours: body.ventana }).toFormat('y-LL-dd HH:mm')
    ];
    const { rows } = await db.query(query, values);
    res.status(200).send(rows[0]);
});
