import express from "express";
import router from "./routes/alunoRoute.js";

// Instanciando e configurando o express
const app = express();
const port = 3000;
app.use(express.json());

// Configurando as rotas
app.use("/alunos", router);

// Raiz da api
app.get("/", (req, res) => {
  res.send("Direcione apara a rota /alunos para utilizar a api!");
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Server is running on url http://localhost:${port}`);
});
