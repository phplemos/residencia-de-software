import { Router } from "express";
import { createAluno, getAlunoById, updateAluno } from "../database/repositories/alunoRepository.js";

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

// Rota para buscar um aluno por ID (READ - GET)
router.get("/:id", (req, res) => {
  const { id } = req.params;
  getAlunoById(id)
    .then((aluno) => {
      res.json(aluno); // Retorna o aluno encontrado
    })
    .catch((err) => {
      res.status(404).json({ error: err.message });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const alunoAtualizado = {
    nome: req.body.nome,
    email: req.body.email,
    nome_do_curso: req.body.nome_do_curso,
  };
  
  updateAluno(id, alunoAtualizado)
    .then((aluno) => {
      res.json(aluno);
    })
    .catch((err) => {
      res.status(404).json({ error: err.message });
    });
});

// Rota para buscar todos os alunos
router.get('/alunos', async (req, res) => {
  try {
    const alunos = await Aluno.findAll(); // Retorna todos os registros da tabela Aluno
    res.status(200).json(alunos); // Envia a lista de alunos como JSON
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar alunos', error: error.message });
  }
});

export default router;
