const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const userSchema=new Schema({
    username:{
        type:String,
        required:true
    },
    firstname:String,
    lastname:String,
    lat:Number,
    lon:Number,
    city:String,
    subcity:String,
    roles:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:String,
    phoneNum:Number,
    imgUrl:{
        type:String,
        required:true
    },
    refreshToken:String,
    stars:Number,
    notificationCount:Number,
    lastNotified:Date,
    bookmarkCount:Number,
    favoredNumber:{
        type:Number,
        default:0
    },
    favoredBy:[]
});
module.exports=mongoose.model('User',userSchema);
