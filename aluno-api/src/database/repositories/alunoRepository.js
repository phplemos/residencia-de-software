import Aluno from "../models/alunoModel.js";

async function createAluno({ nome, email, nome_do_curso }) {
  await Aluno.sync({ force: true });
  return Aluno.build({ nome, email, nome_do_curso }).save();
}

async function getAlunoById(id) {
  try {
    const aluno = await Aluno.findByPk(id); // Busca aluno pelo ID
    if (!aluno) {
      throw new Error(`Aluno com ID ${id} não encontrado`);
    }
    return aluno; // Retorna o aluno encontrado
  } catch (error) {
    console.error("Erro ao buscar aluno por ID:", error);
    throw error; // Lança o erro para tratamento posterior
  }
}

export { createAluno, getAlunoById };