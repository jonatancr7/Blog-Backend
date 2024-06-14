import { Op } from "sequelize";
import { generarToken, validarToken } from "../utils/TokenUtils";
import { Users } from "./Model";

export const login = async (req,res)=>{
    const {email,password}=req.body;
    console.log(req.body);
    try{
        const user = await Users.findOne(
            {where:
                {[Op.and]:[{email},{password}]}
        });
        const token = generarToken(user.dataValues);
        res.status(200).json([token,user]);

    }catch (err){
        console.log(err);
        res.status(500).json({ msg: err });
    }
};
export const register = async (req,body)=>{
    try{
        const user = await Users.create(req.body);
        console.log(user);
        res.status(200).json(user); 
    }catch (err){
        console.log(err.message);
        res.status(500).json({ msg: err });
    }
};