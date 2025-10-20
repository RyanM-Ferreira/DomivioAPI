import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import User from "./user.js";
import Chat from "./chat.js";

const Message = sequelize.define("Message", {
  messageID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  chatID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Chat,
      key: "chatID"
    }
  },
  senderID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "userID"
    }
  },
  content: {
    type: DataTypes.STRING(256),
    allowNull: false
  },
  sentAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: "messages",
  timestamps: false
});

Message.belongsTo(Chat, { foreignKey: "chatID" });
Chat.hasMany(Message, { foreignKey: "chatID" });

Message.belongsTo(User, { as: "Sender", foreignKey: "senderID" });
User.hasMany(Message, { as: "SentMessages", foreignKey: "senderID" });

export default Message;