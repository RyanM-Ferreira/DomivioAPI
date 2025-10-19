import express from "express";
import { getAllUsers, getUserById, createUser, deleteUserById } from "../controllers/userController.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.delete("/:id", deleteUserById);

export default router;