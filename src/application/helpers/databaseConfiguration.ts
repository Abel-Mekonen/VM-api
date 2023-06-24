import * as dotenv from "dotenv";
const DB_TYPE:
  | "mysql"
  | "mariadb"
  | "postgres"
  | "mssql"
  | "oracle"
  | "sqlite" = "postgres";

dotenv.config();
export const DB_CONFIG = {
  type: DB_TYPE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};
