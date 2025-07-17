import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

const port = process.env.PORT;
dotenv.config({
  path: "./env",
});
connectDB()
  .then(() => {
    app.listen(port || 8000, () => {
      console.log(`Server is running at port ${port}`);
    });
  })
  .catch((err) => {
    console.log("MONDODB connection failed-> ", err);
  });
