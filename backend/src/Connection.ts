import { Sequelize } from "sequelize";

const conn = new Sequelize(process.env.DATABASE_URL!, {
  dialect: "postgres",
  logging: false,
});

export default conn;
