// config/database.js
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'autodb'
});

// Connessione al database
db.connect((err) => {
    if (err) {
        console.error('Errore di connessione al database:', err);
        return;
    }
    console.log('Connessione al database riuscita');
});

module.exports = db; // ✅ Esportazione corretta
