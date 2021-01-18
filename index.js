const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();

// CORS
app.use(cors());

// Lectura y parseo del body
app.use( express.json() );

app.use('/api/fullstack', require('./routes/points'));

app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT}`);
});