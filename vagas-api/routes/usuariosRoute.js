import { Router } from "express";
import {
  create,
  update,
  remove,
  findAll,
} from "../repositories/usuarioRepository.js";

const usuarioRouter = Router();

usuarioRouter.post("/", (req, res) => {
  const { nome, email, telefone, senha } = req.body;
  let usuario = create({ nome, email, telefone, senha });
  return res.status(201).json(usuario);
});

usuarioRouter.get("/", (req, res) => {
  const usuarios = findAll();
  return res.json(usuarios);
});

usuarioRouter.put("/:id", (req, res) => {
  const { nome, email, telefone, senha } = req.body;
  const { id } = req.params;
  const usuario = update(id, {
    nome,
    email,
    telefone,
    senha,
  });
  if (!usuario) {
    return res.status(404).json({ message: "Usuario não encontrado" });
  }
  return res.json(usuario);
});

usuarioRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  const result = remove(id);
  if (!result) {
    return res.status(404).json({ message: "Usuario não encontrado" });
  }
  return res.status(204).send();
});

export default usuarioRouter;
