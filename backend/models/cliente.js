// backend/models/cliente.js
const db = require('../config/database');

const Cliente = {
    getAll: (callback) => {
        db.query('SELECT * FROM cliente', callback);
    },
    add: (cliente, callback) => {
        db.query('INSERT INTO cliente SET ?', cliente, callback);
    },
    update: (id, cliente, callback) => {
        db.query('UPDATE cliente SET ? WHERE id = ?', [cliente, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM cliente WHERE id = ?', [id], callback);
    }
};

module.exports = Cliente;