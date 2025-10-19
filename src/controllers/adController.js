import Ad from "../models/ad.js";

// GET AD
export const getAllAds = async (req, res) => {
    try {
        const ads = await Ad.findAll({ include: "User" });
        res.json(ads);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET AD by ID
export const getAdById = async (req, res) => {
    try {
        const ad = await Ad.findByPk(req.params.id, { include: "User" });
        if (!ad) return res.status(404).json({ error: "Ad not found" });
        res.json(ad);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// POST AD
export const createAd = async (req, res) => {
    try {
        const ad = await Ad.create(req.body);
        res.status(201).json(ad);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};