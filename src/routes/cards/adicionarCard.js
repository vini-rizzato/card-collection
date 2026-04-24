import express from "express";
import existeCard from "../../middleware/cards/existeCard.js";
import adicionarCarta from "../../controllers/cards/adicionaCarta.js";
import auth from "../../middleware/auth/auth.js";

const adicionarCarta = express.Router();
    
adicionarCarta.get("/:name", auth, existeCard, adicionarCarta);