import Aluno from "../models/alunoModel.js";

async function createAluno({ nome, email, nome_do_curso }) {
  await Aluno.sync({ force: true });
  return Aluno.build({ nome, email, nome_do_curso }).save();
}

export { createAluno };
