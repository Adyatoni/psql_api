import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";

class User extends Model {
  declare id: number;
  declare name: string;
  declare email: string;
  declare age: number;
  declare password: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    name : DataTypes.STRING(100),

    email: {
      type: DataTypes.STRING(100),
      unique: true,
    },

    age:DataTypes.INTEGER,
    
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    //modelName: "User",
    tableName: "users",
    timestamps: false,
  }
);

export default User;
