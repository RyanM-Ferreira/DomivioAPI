import express from "express";
import { getAllAds, getAdById, createAd } from "../controllers/adController.js";

const router = express.Router();

router.get("/", getAllAds);
router.get("/:id", getAdById);
router.post("/", createAd);

export default router;