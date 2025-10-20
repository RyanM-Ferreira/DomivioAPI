// PORT
const PORT = 3000;

// Depencencies
import express from "express";
import cors from "cors";

import sequelize from "./db.js";

// Routes
import userRoutes from "./routes/userRoutes.js";
import adRoutes from "./routes/adRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";

// Node Express
const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/ads", adRoutes);
app.use("/chats", chatRoutes);
app.use("/messages", messageRoutes);

app.get("/", (req, res) => {
    console.log("Welcome to Domivio API.\nIt's dangerous to go alone! Take this.\n");

    res.send(`
  <div style="
    background-color: #111;
    color: #fff;
    padding: 40px;
    border-radius: 16px;
    max-width: 600px;
    margin: 100px auto;
    box-shadow: 0 4px 20px rgba(0,0,0,0.5);
    font-family: Arial, sans-serif;
  ">
    <h1 style="margin-bottom: 20px;">Welcome to Domivio API</h1>
    <hr style="border-color: #555; margin-bottom: 30px;">
    <p>Visit the following endpoints to interact with the API:</p>
    <ul style="list-style-type: none; padding: 0; font-size: 18px;">
      <li><code>/users</code></li>
      <li><code>/ads</code></li>
      <li><code>/chats</code></li>
      <li><code>/messages</code></li>
    </ul>
  </div>
`);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));