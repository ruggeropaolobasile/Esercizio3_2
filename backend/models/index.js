// backend/models/index.js

const sequelize = require("../config/database");
const Cliente = require("./cliente");
const Automobile = require("./automobile");
const Garage = require("./garage");

const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true }); // Aggiorna il database senza perdere dati
    console.log("Database sincronizzato con successo!");
  } catch (error) {
    console.error("Errore durante la sincronizzazione del database:", error);
  }
};

module.exports = { Cliente, Automobile, Garage, syncDatabase };
