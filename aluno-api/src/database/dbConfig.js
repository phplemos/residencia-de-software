import { Sequelize } from "sequelize";
import "dotenv/config";
const sequelize = new Sequelize({
  dialect: "sqlite",
  
  storage: process.env.DB_LOCAL,
});

export { sequelize };
