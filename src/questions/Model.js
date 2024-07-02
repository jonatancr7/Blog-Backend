import { sequelize } from "../DataBase/configDB.js";
import { DataTypes } from "sequelize";
export const Questions = sequelize.define("Questions",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    ask:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    response_correct:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    option_one:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    option_two: {
        type: DataTypes.STRING,
        allowNull: false
    },
    option_third: {
        type: DataTypes.STRING,
        allowNull: false
    }
});