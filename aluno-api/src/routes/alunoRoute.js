import { Router } from "express";
import { createAluno } from "../database/repositories/alunoRepository.js";

const router = Router();

// Verificação rota
router.get("/", (req, res) => {
  res.send("Connectou");
});


// Rota para criar um aluno (CREATE - POST)
router.post("/", (req, res) => {
  const aluno = {
    nome: req.body.nome,
    email: req.body.email,
    nome_do_curso: req.body.nome_do_curso,
  };
  createAluno(aluno)
    .then((aluno) => {
      res.status(201).json(aluno);
    })
    .catch((err) => {
      res.status(400).json({ error: err.message });
    });
});

export default router;
