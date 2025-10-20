import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const User = sequelize.define("User", {
  userID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userType: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  },
  tel: {
    type: DataTypes.STRING(20),
  },
  cpf_cnpj: {
    type: DataTypes.STRING(14),
    unique: true
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  birthday: {
    type: DataTypes.DATEONLY,
    timestamps: false
  }
}, {
  tableName: "users",
  timestamps: false
});

export default User;