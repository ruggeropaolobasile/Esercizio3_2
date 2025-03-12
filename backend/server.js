// backend/server.js (o il file principale del server)
const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Configurazione Swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API Gestione Clienti e Automobili',
      version: '1.0.0',
      description: 'Documentazione delle API per la gestione di clienti e automobili',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./routes/*.js'], // Percorso ai file delle rotte
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Rotte per i clienti
const clienteRoutes = require('./routes/clienteRoutes');
app.use('/api', clienteRoutes); // Rotte per i clienti

// Rotte per le automobili
const automobileRoutes = require('./routes/automobileRoutes');
app.use('/api/automobili', automobileRoutes); // Registrazione delle rotte per le automobili

// Avvia il server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server avviato su http://localhost:${PORT}`);
  console.log(`Documentazione API disponibile su http://localhost:${PORT}/api-docs`);
});
