const express = require('express');
const router = express.Router();
const Automobile = require('../models/automobile');

/**
 * @swagger
 * components:
 *   schemas:
 *     Automobile:
 *       type: object
 *       required:
 *         - marca
 *         - modello
 *         - immatricolazione
 *         - targa
 *         - id_cliente
 *       properties:
 *         id:
 *           type: integer
 *           description: ID dell'automobile
 *         marca:
 *           type: string
 *           description: Marca dell'automobile
 *         modello:
 *           type: string
 *           description: Modello dell'automobile
 *         immatricolazione:
 *           type: string
 *           format: date
 *           description: Data di immatricolazione dell'automobile
 *         targa:
 *           type: string
 *           description: Targa dell'automobile
 *         id_cliente:
 *           type: integer
 *           description: ID del cliente proprietario dell'automobile
 *       example:
 *         id: 1
 *         marca: Fiat
 *         modello: Panda
 *         immatricolazione: 2020-01-01
 *         targa: AB123CD
 *         id_cliente: 1
 */

/**
 * @swagger
 * /api/automobili:
 *   get:
 *     summary: Recupera la lista di tutte le automobili
 *     tags: [Automobili]
 *     parameters:
 *       - in: query
 *         name: id_cliente
 *         schema:
 *           type: integer
 *         description: ID del cliente per filtrare le automobili
 *     responses:
 *       200:
 *         description: Lista di tutte le automobili
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Automobile'
 */
router.get('/', (req, res) => {
  const idCliente = req.query.id_cliente;
  
  // Se l'id_cliente è fornito, filtra le automobili per quel cliente
  if (idCliente) {
    Automobile.getAll((err, rows) => {
      if (err) {
        return res.status(500).json({ error: err });
      }
      // Filtra le automobili per id_cliente
      const filtered = rows.filter(auto => auto.id_cliente == idCliente);
      return res.json(filtered);
    });
  } else {
    // Se id_cliente non è specificato, restituisci tutte le automobili
    Automobile.getAll((err, rows) => {
      if (err) {
        return res.status(500).json({ error: err });
      }
      return res.json(rows);
    });
  }
});

/**
 * @swagger
 * /api/automobili:
 *   post:
 *     summary: Aggiungi una nuova automobile
 *     tags: [Automobili]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Automobile'
 *     responses:
 *       201:
 *         description: Automobile aggiunta con successo
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Automobile'
 */
router.post('/', (req, res) => {
  const automobile = req.body;
  Automobile.add(automobile, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(201).json(result); // Risposta di successo
  });
});

/**
 * @swagger
 * /api/automobili/{id}:
 *   put:
 *     summary: Aggiorna un'automobile esistente
 *     tags: [Automobili]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID dell'automobile
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Automobile'
 *     responses:
 *       200:
 *         description: Automobile aggiornata con successo
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Automobile'
 *       404:
 *         description: Automobile non trovata
 */
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const automobile = req.body;
  Automobile.update(id, automobile, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(result);
  });
});

/**
 * @swagger
 * /api/automobili/{id}:
 *   delete:
 *     summary: Elimina un'automobile
 *     tags: [Automobili]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID dell'automobile
 *     responses:
 *       204:
 *         description: Automobile eliminata con successo
 *       404:
 *         description: Automobile non trovata
 */
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Automobile.delete(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Automobile non trovata' });
    }
    res.status(204).send(); // No Content
  });
});

module.exports = router;
