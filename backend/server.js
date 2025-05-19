// backend/server.js (o il file principale del server)
const express = require('express'); // Dichiarazione di express
const cors = require('cors');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const clienteRoutes = require('./routes/clienteRoutes');
const automobileRoutes = require('./routes/automobileRoutes');
const automobiliDisponibiliRoutes = require('./routes/automobiliDisponibiliRoutes'); // Importa la rotta

const app = express();
const port = 3000;

// Configura CORS per consentire le richieste da http://localhost:4200
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());

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
app.use('/api/clienti', clienteRoutes);

// Rotte per le automobili
app.use('/api/automobili', automobileRoutes);
app.use('/api/automobili_disponibili', automobiliDisponibiliRoutes); // Usa la rotta

// Avvio del server
app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
