import { sequelize } from "../Database/configDB.js";
import { DataTypes } from "sequelize";

export const Users = sequelize.define("Users",{
    id:{
        type: DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    email:{
        unique:true,
        allowNull: false,
        type: DataTypes.STRING(),
        primaryKey:true,

    },
    password: {
        type: DataTypes.STRING(),
        allowNull: false
    },
    cellphone: {
        unique : true,
        type: DataTypes.STRING(),
    },
})