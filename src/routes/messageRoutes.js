import express from "express";
import { getMessagesByChat, sendMessage } from "../controllers/messageController.js";

const router = express.Router();

router.get("/:chatID", getMessagesByChat);
router.post("/", sendMessage);

export default router;