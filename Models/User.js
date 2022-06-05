import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:"String",
        required:[true,"Please enter name"]
    },
    email:{
        type:"String",
        required:[true,"Please enter email"]
    }
})

// const User = new mongoose.model('users',userSchema);
// export default User;

module.exports = mongoose.models.users || mongoose.model('users',userSchema);