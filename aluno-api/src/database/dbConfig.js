import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  // O caminho do arquivo de banco de dados, que vai ser da sua maquina local!
  // Se for windows usar barra invertida "\"
  // Se for linux usar barra normal "/"
  storage:
    "D:\\Pedro\\Projetos\\residencia-de-software\\aluno-api\\src\\database\\alunos.db",
});

export { sequelize };
