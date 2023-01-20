const express = require("express");
const app = express();
const userRouter = require("./routes/users");

app.use(express.static("public"));
app.use("/users", userRouter);

app.listen(3000);
