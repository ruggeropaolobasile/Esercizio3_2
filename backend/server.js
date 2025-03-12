// backend/server.js (o il file principale del server)
const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

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
});
