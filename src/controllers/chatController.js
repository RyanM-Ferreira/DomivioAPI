import { Op } from "sequelize";

import Chat from "../models/chat.js";
import User from "../models/user.js";

export const getAllChats = async (req, res) => {
    try {
        const chats = await Chat.findAll({
            include: [{ model: User, as: "User1" }, { model: User, as: "User2" }]
        });

        res.json(chats);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getChatById = async (req, res) => {
    try {
        const chat = await Chat.findByPk(req.params.id, {
            include: [{ model: User, as: "User1" }, { model: User, as: "User2" }]
        });

        if (!chat) return res.status(404).json({ error: "Chat not found" });

        res.json(chat);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const createChat = async (req, res) => {
    try {
        const { user1ID, user2ID } = req.body;
        const chat = await Chat.create({ user1ID, user2ID });

        res.status(201).json(chat);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getChatsByUserId = async (req, res) => {
    try {
        const userID = req.params.id;

        const chats = await Chat.findAll({
            where: {
                [Op.or]: [{ user1ID: userID }, { user2ID: userID }]
            },
            include: [
                { model: User, as: "User1" }, { model: User, as: "User2" }
            ]
        });

        if (!chats.length) return res.status(404).json({ error: "No chats found for this user" });

        res.json(chats);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};