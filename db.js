import mongoose from "mongoose";

const URI = "mongodb://127.0.0.1:27017/Todo";

mongoose
  .connect(URI)
  .then(() => console.log("MongoDB conectado"))
  .catch((error) => console.error("Error:", error));