import express from "express";
import auth from "../../middleware/auth/auth.js";
import authEmail from "../../middleware/auth/authEmail.js";
import getCollections from "../../controllers/collections/getCollections.js";
import createCollection from "../../controllers/collections/createCollection.js";
import verifyCollectionId from "../../middleware/collections/verifyCollectionId.js";
import deleteCollection from "../../controllers/collections/deleteCollection.js";
import verifyCollectionName from "../../middleware/collections/verifyCollectionName.js";
import verifyCollectionNameExists from "../../middleware/collections/verifyCollectionNameExists.js";
import updateCollection from "../../controllers/collections/updateCollection.js";


const collectionsRouter = express.Router();

collectionsRouter.get("/", auth, authEmail, getCollections);
collectionsRouter.post("/", auth, authEmail, verifyCollectionNameExists, verifyCollectionName, createCollection);
collectionsRouter.delete("/", auth, authEmail, verifyCollectionId, deleteCollection);
collectionsRouter.put("/", auth, authEmail, verifyCollectionId, verifyCollectionNameExists, updateCollection);

export default collectionsRouter;