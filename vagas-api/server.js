const express = require("express");

const app = express();
const {
  create,
  update,
  remove,
  findAll,
} = require("./repositories/vagasRepository");

app.use(express.json());

app.post("/vagas", (req, res) => {
  const { descricao, titulo, dataCadastro, telefone, empresa } = req.body;
  let vaga = create({ descricao, titulo, dataCadastro, telefone, empresa });
  return res.status(201).json(vaga);
});

app.get("/vagas", (req, res) => {
  const vagas = findAll();
  return res.json(vagas);
});

app.put("/vagas/:id", (req, res) => {
  const { descricao, titulo, dataCadastro, telefone, empresa } = req.body;
  const { id } = req.params;
  const vaga = update(id, {
    descricao,
    titulo,
    dataCadastro,
    telefone,
    empresa,
  });
  if (!vaga) {
    return res.status(404).json({ message: "Vaga não encontrada" });
  }
  return res.json(vaga);
});

app.delete("/vagas/:id", (req, res) => {
  const { id } = req.params;
  const result = remove(id);
  if (!result) {
    return res.status(404).json({ message: "Vaga não encontrada" });
  }
  return res.status(204).send();
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
