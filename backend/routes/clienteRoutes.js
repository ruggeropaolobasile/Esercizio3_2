const express = require('express');
const router = express.Router();
const db = require('../config/database');

// GET: Recupera tutti i clienti
router.get('/clienti', (req, res) => {
    db.query('SELECT * FROM cliente', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// POST: Aggiungi un cliente
router.post('/clienti', (req, res) => {
    const { nome, cognome, email } = req.body;
    db.query(
        'INSERT INTO cliente (nome, cognome, email) VALUES (?, ?, ?)',
        [nome, cognome, email],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ id: result.insertId, nome, cognome, email });
        }
    );
});

// PUT: Modifica un cliente
router.put('/clienti/:id', (req, res) => {
    const { id } = req.params;
    const { nome, cognome, email } = req.body;
    db.query(
        'UPDATE cliente SET nome = ?, cognome = ?, email = ? WHERE id = ?',
        [nome, cognome, email, id],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            if (result.affectedRows === 0) {
                return res.status(404).json({ error: 'Cliente non trovato' });
            }
            res.json({ id, nome, cognome, email });
        }
    );
});

// DELETE: Elimina un cliente
router.delete('/clienti/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM cliente WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Cliente non trovato' });
        }
        res.status(204).send(); // No Content
    });
});

module.exports = router;
