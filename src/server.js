// PORT
const PORT = 3000;

// Depencencies
import express from "express";
import cors from "cors";

import sequelize from "./db.js";

// Routes
import userRoutes from "./routes/userRoutes.js";
import adRoutes from "./routes/adRoutes.js";

// Node Express
const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/ads", adRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));