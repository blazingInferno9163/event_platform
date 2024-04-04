import { Schema, models, model } from "mongoose";


const UserSchema=new Schema({
    clerkId:{type:String, required:true, unique:true},
    email:{type:String, required:true, unique:true},
    username:{type:String, required:true, unique:true},
    firstname:{type:String, required:true},
    lastname:{type:String, required:true},
    photo:{type:String, required:true},
})

//either use an existing model or create a new model

const User=models.User||model('User',UserSchema)

export default User;