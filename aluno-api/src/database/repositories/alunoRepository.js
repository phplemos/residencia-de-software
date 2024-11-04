import Aluno from "../models/alunoModel.js";

async function createAluno({ nome, email, nome_do_curso }) {
  return Aluno.create({ nome, email, nome_do_curso });
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

async function getAllAlunos() {
  try {
    const alunos = await Aluno.findAll(); // Busca todos os alunos
    return alunos; // Retorna a lista de alunos
  } catch (error) {
    console.error("Erro ao buscar todos os alunos:", error);
    throw new Error(`Erro ao buscar alunos: ${error.message}`);
  }
}

async function deleteAluno(id) {
  try {
    const alunos = await Aluno.destroy({
      where: {
        id: id,
      },
    });
    return alunos;
  } catch (error) {
    console.error("Erro ao deletar aluno:", error);
    throw new Error(`Erro ao deletar aluno: ${error.message}`);
  }
}

export { createAluno, getAlunoById, updateAluno, getAllAlunos, deleteAluno };
