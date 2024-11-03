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

async function updateAluno(id, { nome, email, nome_do_curso }) {
  try {
    const aluno = await Aluno.findByPk(id);
    if (!aluno) {
      throw new Error(`Aluno com ID ${id} não encontrado`);
    }
    // Atualiza os campos
    aluno.nome = nome || aluno.nome;
    aluno.email = email || aluno.email;
    aluno.nome_do_curso = nome_do_curso || aluno.nome_do_curso;
    
    await aluno.save(); // aqui salva as alteracoes no banco
    return aluno;
  } catch (error) {
    console.error("Erro ao atualizar aluno:", error);
    throw error;
  }
}

export { createAluno, getAlunoById, updateAluno };