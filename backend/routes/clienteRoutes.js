const express = require('express');
const router = express.Router();
const db = require('../db'); // Richiedi il file db.js

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
router.get('/', (req, res) => {
    db.query('SELECT * FROM cliente', (err, results) => {
        if (err) {
            console.error('Errore durante l\'esecuzione della query:', err);
            res.status(500).json({ error: 'Errore durante la visualizzazione dei clienti' });
            return;
        }
        res.json(results);
    });
});

// Rotta per ottenere un cliente specifico
router.get('/:id', (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM clienti WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.error('Errore durante l\'esecuzione della query:', err);
            res.status(500).send('Errore del server');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('Cliente non trovato');
            return;
        }
        res.json(results[0]);
    });
});

// Rotta per eliminare un cliente
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM clienti WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.error('Errore durante l\'esecuzione della query:', err);
            res.status(500).send('Errore del server');
            return;
        }
        res.status(200).send('Cliente eliminato con successo');
    });
});

module.exports = router;
