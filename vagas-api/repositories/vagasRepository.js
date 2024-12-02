import { v4 as uuidv4 } from "uuid";
import fs from "fs";

const vagas = [];

const fetchData = async () => {
  const dados = JSON.parse(fs.readFileSync("db.json", "utf8"));
  vagas.push(...dados.vagas);
};

fetchData();

export function findById(id) {
  return vagas.find((vaga) => vaga.id == id);
}

export function create({ descricao, titulo, dataCadastro, telefone, empresa }) {
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

export function update(
  id,
  { descricao, titulo, dataCadastro, telefone, empresa }
) {
  const index = vagas.findIndex((vaga) => vaga.id == id);
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

export function remove(id) {
  const index = vagas.findIndex((vaga) => vaga.id == id);
  if (index < 0) {
    return false;
  }
  vagas.splice(index, 1);
  return true;
}

export function findAll() {
  return vagas;
}
