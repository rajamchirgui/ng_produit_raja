const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'http://localhost:4200', // Autoriser les requêtes provenant de cette URL
}));

app.listen(3333, () => {
    console.log('Serveur démarré sur le port 3333');
});