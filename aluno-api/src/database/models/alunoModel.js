import { DataTypes } from "sequelize";
import { sequelize } from "../dbConfig.js";

const Aluno = sequelize.define("alunos", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nome_do_curso: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Aluno.sync();
export default Aluno;
