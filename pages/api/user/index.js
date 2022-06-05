import dbConnection from '../../../DB/dbConnect.js';
import UserModel from '../../../Models/User.js';
// connet db
dbConnection();
// get all records,insert records
export default async (req,res) =>{
    const {method} = req;
    switch(method){
        case "GET":
            try{
                const fetchUsers = await UserModel.find({});
                res.status(200).json({success:true,users:fetchUsers});
            }catch(e){
                res.status(400).json({success:false});
            }
            break;
        case "POST":
            try{
                const addUser = await UserModel.create(req.body);
                const savingUser = await addUser.save();
                res.status(200).json({success:true,user:savingUser});
            }catch(e){
                res.status(400).json({success:false});
            }
            break;
        default:
            res.status(400).json({success:false});
            break;
    }
}