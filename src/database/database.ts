import { Sequelize } from "sequelize-typescript";

require("dotenv").config();
console.log(process.env.DB_NAME);
const sequelize = new Sequelize(
  process.env.DB_NAME ?? "adomidb",
  process.env.DB_USER ?? "adomiusr",
  process.env.DB_PASS ?? "adomipsswd",
  {
    host: process.env.DB_HOST ?? "localhost",
    dialect: "postgres",
    port: Number(process.env.DB_PORT) ?? 5432,
    protocol: "postgres",
  }
);

export default sequelize;
