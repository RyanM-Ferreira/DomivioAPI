import express from "express";
import { getAllChats, getChatById, createChat, getChatsByUserId } from "../controllers/chatController.js";

const router = express.Router();

router.get("/", getAllChats);
router.get("/:id", getChatById);
router.post("/", createChat);
router.get("/user/:id", getChatsByUserId);

export default router;