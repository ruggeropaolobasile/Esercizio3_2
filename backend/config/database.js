const mysql = require('mysql');
const db = require('C:/Users/A566apulia/Desktop/prova/Esercizio3_2/backend/config/database.js');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Lascia vuoto se non hai impostato una password
    database: 'autodb'
});

connection.connect((err) => {
    if (err) {
        console.error('Errore di connessione al database:', err);
        return;
    }
    console.log('Connesso al database!');
});

module.exports = connection;


