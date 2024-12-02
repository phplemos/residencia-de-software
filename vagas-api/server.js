import express from "express";
import vagasRouter from "./routes/vagasRoute.js";
import loginRouter from "./routes/loginRouter.js";
import cadastroRouter from "./routes/cadastroRouter.js";

const app = express();

app.use(express.json());

app.use("/vagas", vagasRouter);

app.use("/login", loginRouter);

app.use("/cadastro", cadastroRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
