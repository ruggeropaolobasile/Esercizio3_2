// filepath: C:\Users\A566apulia\Desktop\prova\Esercizio3_2\backend\db.js
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // <-- inserisci qui la tua password, se esiste
    database: 'autodb',
    port: 3306 // opzionale, solo se diversa da 3306
});

connection.connect((err) => {
    if (err) {
        console.error('Errore di connessione al database:', err);
        return;
    }
    console.log('Connesso al database!');
});

module.exports = connection;