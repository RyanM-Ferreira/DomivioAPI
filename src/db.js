import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, 
      }
    },
    logging: false
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected. Yeeepp!");
  } catch (err) {
    console.error("Database connection failed. Do the L!", err);
  }
})();

export default sequelize;