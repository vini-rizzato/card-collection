import express from "express";
import existsCard from "../../middleware/cards/existsCard.js";
import exibiCartaDados from "../../controllers/cards/exibiCartaDados.js";
import addCardUser from "../../controllers/cards/addCardUser.js";
import auth from "../../middleware/auth/auth.js";
import existsCardBySet from "../../middleware/cards/existsCardBySet.js";
import verifyCollectionId from "../../middleware/collections/verifyCollectionId.js";
import verifyExistsCard from "../../middleware/cards/verifyExistsCard.js";  
import getAllCards from "../../controllers/cards/getAllCards.js";
import deleteCard from "../../controllers/cards/deleteCard.js";
import updateCard from "../../controllers/cards/updateCard.js";
import fetchDataCard from "../../middleware/cards/fetchDataCard.js";
import verifyExistsCardDelete from "../../middleware/cards/verifyExistsCardDelete.js";

const cardsUserRouter = express.Router();

cardsUserRouter.get("/", auth, getAllCards);
cardsUserRouter.get("/add/:name", auth, existsCard, exibiCartaDados);
cardsUserRouter.post("/add/:name", auth, existsCardBySet, verifyExistsCard, verifyCollectionId, addCardUser);
cardsUserRouter.delete("/", auth, fetchDataCard, verifyCollectionId, verifyExistsCardDelete, deleteCard);
cardsUserRouter.put("/", auth, fetchDataCard, verifyCollectionId, verifyExistsCard, updateCard);

export default cardsUserRouter;