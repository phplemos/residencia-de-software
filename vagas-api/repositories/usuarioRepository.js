import { v4 as uuidv4 } from "uuid";
import fs from "fs";

const usuarios = [];

const fetchData = async () => {
  const dados = JSON.parse(fs.readFileSync("db.json", "utf8"));
  usuarios.push(...dados.usuarios);
};

fetchData();

export function findByEmail(email) {
  return usuarios.find((usuario) => usuario.email == email);
}

export function findById(id) {
  return usuarios.find((usuario) => usuario.id == id);
}

export function create({ nome, email, telefone, senha }) {
    const verifyUser = findByEmail(email);
    if(verifyUser){
        return null;
    }  
    const usuario = {
    id: uuidv4(),
    nome,
    email,
    telefone,
    senha,
  };  
  usuarios.push(usuario);
  return usuario;
}

export function update(id, { nome, email, telefone, senha }) {
  const index = usuarios.findIndex((usuario) => usuario.id === id);
  if (index < 0) {
    return null;
  }
  usuarios[index] = {
    id,
    nome,
    email,
    telefone,
    senha,
  };
  return usuarios[index];
}

export function remove(id) {
  const index = usuarios.findIndex((usuario) => usuario.id === id);
  if (index < 0) {
    return false;
  }
  usuarios.splice(index, 1);
  return true;
}

export function findAll() {
  return usuarios;
}
