import { Questions } from "../questions/Model.js";
import { sequelize } from "../DataBase/configDB.js";
export const getquestions = async(req,res)=>{
    try{
        const question = await Questions.findAll({
            order: sequelize.random(),
            limit:10
        });
        res.status(200).json(question);
    }catch(err){
        console.log(err)
        res.status(500).json({msg:err})
    }
}

export const createanswer=async(req,res)=>{
    const {questionid,answer}=req.body;
    try{
        const question = await Questions.findByPk(questionid);
        const correct = question.response_correct.trim().toLowerCase() === answer.trim().toLowerCase();

        res.json({correct})
        console.log('Resultado de la comparación:', correct);

    }catch(err){
        res.status(500).send(err);
    }

}