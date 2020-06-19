const express = require('express');
const bodyParser = require('body-parser');
const mountRoutes = require('./routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mountRoutes(app);

app.listen(process.env.EXPRESSPORT, () => {
    console.log(`Listening on ${process.env.EXPRESSPORT}, and on postgres port ${process.env.PGPORT} at ${process.env.PGHOST}`);
})
