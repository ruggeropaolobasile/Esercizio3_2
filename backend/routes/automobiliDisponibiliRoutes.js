// filepath: C:\Users\A566apulia\Desktop\prova\Esercizio3_2\backend\routes\automobiliDisponibiliRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../db');

/**
 * @swagger
 * /api/automobili_disponibili:
 *   get:
 *     summary: Recupera la lista di tutte le automobili disponibili
 *     tags: [AutomobiliDisponibili]
 *     responses:
 *       200:
 *         description: Lista di tutte le automobili disponibili
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/AutomobileDisponibile'
 */
router.get('/', (req, res) => {
    db.query('SELECT * FROM automobili_disponibili', (err, results) => {
        if (err) {
            console.error('Errore durante l\'esecuzione della query:', err);
            res.status(500).json({ error: 'Errore durante la visualizzazione delle automobili disponibili' });
            return;
        }
        res.json(results);
    });
});

module.exports = router;