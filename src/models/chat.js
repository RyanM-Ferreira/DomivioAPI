import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import User from "./user.js";

const Chat = sequelize.define("Chat", {
  chatID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user1ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "userID"
    }
  },
  user2ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "userID"
    }
  }
}, {
  tableName: "chats",
  timestamps: false
});

// Associações
Chat.belongsTo(User, { as: "User1", foreignKey: "user1ID" });
Chat.belongsTo(User, { as: "User2", foreignKey: "user2ID" });

User.hasMany(Chat, { as: "ChatsAsUser1", foreignKey: "user1ID" });
User.hasMany(Chat, { as: "ChatsAsUser2", foreignKey: "user2ID" });

export default Chat;