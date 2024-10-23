const { v4: uuidv4 } = require("uuid");

let vagas = [];

function create({ descricao, titulo, dataCadastro, telefone, empresa }) {
  const vaga = {
    id: uuidv4(),
    descricao,
    titulo,
    dataCadastro,
    telefone,
    empresa,
  };
  vagas.push(vaga);
  return vaga;
}

function update(id, { descricao, titulo, dataCadastro, telefone, empresa }) {
  const index = vagas.findIndex((vaga) => vaga.id === id);
  if (index < 0) {
    return null;
  }
  vagas[index] = {
    id,
    descricao,
    titulo,
    dataCadastro,
    telefone,
    empresa,
  };
  return vagas[index];
}

function remove(id) {
  const index = vagas.findIndex((vaga) => vaga.id === id);
  if (index < 0) {
    return false;
  }
  vagas.splice(index, 1);
  return true;
}

function findAll() {
  return vagas;
}

module.exports = { create, update, remove, findAll };
