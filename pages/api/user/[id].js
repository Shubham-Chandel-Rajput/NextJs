import mongoose from "mongoose";
import dbConnection from "../../../DB/dbConnect";
import UserModel from "../../../Models/User";
dbConnection();

export default async(req,res) => {
    const {query:{id},method} = req

    switch(method){
        case "GET":
            try{
                const users = await UserModel.findById(id);
                if(!users){
                    res.status(200).send({success:false});
                }else{
                    res.status(200).send({success:true,user:users});
                }
            }catch(e){
                res.status(400).json({succees:false});
            }
        break;
        case "PUT":
            try{
                const users = await UserModel.findByIdAndUpdate(id,req.body,{
                    new:true,
                    runValidators:true
                });
                if(!users){
                    res.status(200).send({success:false});
                }else{
                    res.status(200).send({success:true,user:users});
                }
            }catch(e){
                res.status(400).json({succees:false});
            }
        break;

        case "DELETE":
            try{
                const users = await UserModel.deleteOne({_id:id});
                if(!users){
                    res.status(200).send({success:false});
                }else{
                    res.status(200).send({success:true,user:users});
                }
            }catch(e){
                res.status(400).json({succees:false});
            }
        break;
        default:
            res.status(400).json({succees:false});
        break;
    }
}