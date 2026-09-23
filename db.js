import mongoose from "mongoose";

const URI = DB_CONECTION_STRING;

mongoose
  .connect(URI)
  .then(() => console.log("MongoDB conectado"))
  .catch((error) => console.error("Error:", error));