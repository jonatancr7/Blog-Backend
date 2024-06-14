import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

export const signature = process.env.SIGNATURE;
export const PORT = process.env.PORT;