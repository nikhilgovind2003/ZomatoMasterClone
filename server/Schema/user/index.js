import mangoose, { mongo } from "mongoose";

const UserSchema = new mangoose.Schema({
    fullname: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String},
    address: [
        {
        details: {type: String},
        for: {type: String}        }
    ],
    phonenumber: {type:Number}
},
{
    timestamps:  true
})


export default UserModel = mongo.MongoCredentials("Users", UserSchema)