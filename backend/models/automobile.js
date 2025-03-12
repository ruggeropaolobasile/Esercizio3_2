// backend/models/automobile.js

const db = require('../config/database');

const Automobile = {
    getAll: (callback) => {
        db.query('SELECT * FROM automobile', callback);
    },
    add: (automobile, callback) => {
        db.query('INSERT INTO automobile SET ?', automobile, callback);
    },
    update: (id, automobile, callback) => {
        db.query('UPDATE automobile SET ? WHERE id = ?', [automobile, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM automobile WHERE id = ?', [id], callback);
    }
};

module.exports = Automobile;