const express = require('express');
const router = express.Router();
const db = require('../config/database');

/**
 * @swagger
 * components:
 *   schemas:
 *     Cliente:
 *       type: object
 *       required:
 *         - nome
 *         - cognome
 *         - email
 *       properties:
 *         id:
 *           type: integer
 *           description: ID del cliente
 *         nome:
 *           type: string
 *           description: Nome del cliente
 *         cognome:
 *           type: string
 *           description: Cognome del cliente
 *         email:
 *           type: string
 *           description: Email del cliente
 *       example:
 *         id: 1
 *         nome: Mario
 *         cognome: Rossi
 *         email: mario.rossi@example.com
 */

/**
 * @swagger
 * /api/clienti:
 *   get:
 *     summary: Recupera la lista di tutti i clienti
 *     tags: [Clienti]
 *     responses:
 *       200:
 *         description: Lista di tutti i clienti
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cliente'
 */
router.get('/clienti', (req, res) => {
    db.query('SELECT * FROM cliente', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

/**
 * @swagger
 * /api/clienti:
 *   post:
 *     summary: Aggiungi un nuovo cliente
 *     tags: [Clienti]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cliente'
 *     responses:
 *       201:
 *         description: Cliente aggiunto con successo
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cliente'
 */
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

/**
 * @swagger
 * /api/clienti/{id}:
 *   put:
 *     summary: Modifica un cliente
 *     tags: [Clienti]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del cliente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cliente'
 *     responses:
 *       200:
 *         description: Cliente modificato con successo
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cliente'
 *       404:
 *         description: Cliente non trovato
 */
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

/**
 * @swagger
 * /api/clienti/{id}:
 *   delete:
 *     summary: Elimina un cliente
 *     tags: [Clienti]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del cliente
 *     responses:
 *       204:
 *         description: Cliente eliminato con successo
 *       404:
 *         description: Cliente non trovato
 */
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
