import express from "express";
import auth from "../../middleware/auth/auth.js";
import authEmail from "../../middleware/auth/authEmail.js";
import createCollection from "../../controllers/collections/createCollection.js";
import verifyCollectionId from "../../middleware/collections/verifyCollectionId.js";
import deleteCollection from "../../controllers/collections/deleteCollection.js";


const collectionsRouter = express.Router();

collectionsRouter.post("/", auth, authEmail, createCollection);
collectionsRouter.delete("/", auth, authEmail, verifyCollectionId, deleteCollection);
collectionsRouter.put("/", auth, authEmail, verifyCollectionId);