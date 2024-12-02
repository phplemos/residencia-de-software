import { Router } from "express";
import { findByEmail } from "../repositories/usuarioRepository.js";

const loginRouter = Router();

loginRouter.post("/", (req, res) => {
  const { email, senha } = req.body;
  const user = findByEmail(email);
  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  } else if (user.senha !== senha) {
    return res.status(401).json({ message: "Senha inválida" });
  }
  return res.status(200).json(user);
});

export default loginRouter;
