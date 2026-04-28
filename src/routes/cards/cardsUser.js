import express from "express";
import existsCard from "../../middleware/cards/existsCard.js";
import exibiCartaDados from "../../controllers/cards/exibiCartaDados.js";
import addCardUser from "../../controllers/cards/addCardUser.js";
import auth from "../../middleware/auth/auth.js";
import verifyCollectionId from "../../middleware/collections/verifyCollectionId.js";

const cardsUserRouter = express.Router();
    
cardsUserRouter.get("/:name", auth, existsCard, exibiCartaDados);
cardsUserRouter.post("/:name", auth, existsCard, verifyCollectionId, addCardUser);

export default cardsUserRouter;