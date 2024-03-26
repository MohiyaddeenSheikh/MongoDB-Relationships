const mongoose = require('mongoose');
const connect = mongoose.connect;
const schema = mongoose.Schema;
const model = mongoose.model;
const database = "relation1";
const uri = "mongodb://127.0.0.1:27017/"+database;

async function connectdb(){
  await connect(uri);
}
connectdb().then(()=>{console.log("db connected..!")}).catch((err)=>{console.log(err)});

const userSchema = new schema({
  username:{type:String},
  password:{type:String},
  email:{type:String},
  address:[
    {street:{type:String},locality:{type:String},state:{type:String},country:{type:String},pincode:{} }
  ]

});