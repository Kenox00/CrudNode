import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import boduyparser from "body-parser";

const app = express();

app.use(boduyparser.json());
dotenv.config();

const PORT = process.env.PORT || 4000;
const MONGODB = process.env.MONGO_URL;

mongoose
  .connect(MONGODB)
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
