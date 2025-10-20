import express from "express";
import { getAllChats, getChatById, createChat } from "../controllers/chatController.js";

const router = express.Router();

router.get("/", getAllChats);
router.get("/:id", getChatById);
router.post("/", createChat);

export default router;