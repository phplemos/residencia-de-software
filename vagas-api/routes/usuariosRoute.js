import { Router } from "express";
import {
  create,
  update,
  remove,
  findAll,
  findById,
} from "../repositories/usuarioRepository.js";

const usuarioRouter = Router();

usuarioRouter.post("/", (req, res) => {
  const { nome, email, senha } = req.body;
  let usuario = create({ nome, email, senha });
  if (usuario === null) {
    return res.status(400).json({ message: "Usuário já cadastrado" });
  }
  return res.status(201).json(usuario);
});

usuarioRouter.get("/", (req, res) => {
  const usuarios = findAll();
  return res.json(usuarios);
});

usuarioRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  const usuario = findById(id);
  if (!usuario) {
    return res.status(404).json({ message: "Usuario não encontrado", id: id });
  }
  return res.json(usuario);
});

usuarioRouter.put("/:id", (req, res) => {
  const { nome, email, senha } = req.body;
  const { id } = req.params;
  const usuario = update(id, {
    nome,
    email,
    senha,
  });
  if (!usuario) {
    return res.status(404).json({ message: "Usuario não encontrado" });
  }
  return res.status(200).json(usuario);
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
