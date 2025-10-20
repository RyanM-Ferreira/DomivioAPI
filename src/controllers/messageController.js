import Message from "../models/message.js";
import User from "../models/user.js";
import Chat from "../models/chat.js";

export const getMessagesByChat = async (req, res) => {
    try {
        const { chatID } = req.params;

        const messages = await Message.findAll({
            where: { chatID }, include: [{ model: User, as: "Sender" }]
        });

        res.json(messages);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const sendMessage = async (req, res) => {
    try {
        const { chatID, senderID, content } = req.body;
        
        const message = await Message.create({ chatID, senderID, content });

        res.status(201).json(message);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};