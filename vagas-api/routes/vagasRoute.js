import { Router } from "express";
import {
  create,
  update,
  remove,
  findAll,
  findById,
} from "../repositories/vagasRepository.js";

const vagasRouter = Router();

vagasRouter.post("/", (req, res) => {
  const { descricao, titulo, dataCadastro, telefone, empresa } = req.body;
  if (!descricao || !titulo || !dataCadastro || !telefone || !empresa) {
    return res
      .status(400)
      .json({ message: "Campos obrigatórios não preenchidos" });
  }
  let vaga = create({ descricao, titulo, dataCadastro, telefone, empresa });
  return res.status(201).json(vaga);
});

vagasRouter.get("/", (req, res) => {
  const vagas = findAll();
  return res.json(vagas);
});

vagasRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  const vaga = findById(id);
  if (!vaga) {
    return res.status(404).json({ message: "Vaga não encontrada", id: id });
  }
  return res.json(vaga);
});

vagasRouter.put("/:id", (req, res) => {
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

vagasRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  const result = remove(id);
  if (!result) {
    return res.status(404).json({ message: "Vaga não encontrada" });
  }
  return res.status(204).send();
});

export default vagasRouter;
