import { Router } from "express";
import { create } from "../repositories/usuarioRepository.js";

const cadastroRouter = Router();

cadastroRouter.post("/", (req, res) => {
  const { nome, email, telefone, senha } = req.body;
  if (!nome || !email || !telefone || !senha) {
    return res
      .status(400)
      .json({ message: "Campos obrigatórios não preenchidos" });
  }
  let usuario = create({ nome, email, telefone, senha });
  if (!usuario) {
    return res.status(400).json({ message: "Usuário já cadastrado" });
  }
  return res.status(201).json(usuario);
});

export default cadastroRouter;
