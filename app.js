const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const URI = "mongodb://127.0.0.1:27017/Todo";

mongoose
  .connect(URI)
  .then(() => console.log("MongoDB conectado"))
  .catch((error) => console.error("Error:", error));

app.use("/api/signup", require("./routes/signup"));
app.use("/api/login", require("./routes/login"));
app.use("/api/signout", require("./routes/signout"));
app.use("/api/refreshToken", require("./routes/refreshToken"));
app.use("/api/user", require("./routes/user"));
app.use("/api/todos", require("./routes/todos"));

app.get("/", (req, res) => {
  res.send("Welcome to Node JS API");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
