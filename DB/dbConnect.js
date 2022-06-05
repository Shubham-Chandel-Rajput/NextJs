import mongoose from "mongoose";
const connect = {};

const dbConnection = async () =>{
    if(connect.isConneted){
        return;
    }
    const db = await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    connect.isConneted = db.connections[0].readyState;
}
export default dbConnection;