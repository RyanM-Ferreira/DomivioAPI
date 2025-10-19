import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import User from "./user.js";

const Ad = sequelize.define("Ad", {
  adID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  location: {
    type: DataTypes.STRING(100)
  },
  price: {
    type: DataTypes.DECIMAL(12, 2)
  },
  size: {
    type: DataTypes.INTEGER
  },
  rooms: {
    type: DataTypes.INTEGER
  },
  bathrooms: {
    type: DataTypes.INTEGER
  },
  garage: {
    type: DataTypes.INTEGER
  },
  description: {
    type: DataTypes.STRING(512)
  },
  // Associações 1
  userID: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: "userID"
    }
  }
}, {
  tableName: "ads",
  timestamps: false
});

// Associações 2
Ad.belongsTo(User, { foreignKey: "userID" });
User.hasMany(Ad, { foreignKey: "userID" });

export default Ad;