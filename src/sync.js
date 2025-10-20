import sequelize from "./db.js";
import "./models/user.js";
import "./models/ad.js";
import "./models/chat.js";
import "./models/message.js";

(async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("All tables were created. All right here!");
    process.exit();
  } catch (err) {
    console.error("Error creating tables, nobody told you to do the L!", err);
  }
})();