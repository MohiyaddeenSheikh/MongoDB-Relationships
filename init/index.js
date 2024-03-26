const {users,orders,posts} = require("./data");
const mongoose = require("mongoose");
const connect = mongoose.connect;
const schema = mongoose.Schema;
const model = mongoose.model;
database = "relation1";
uri = "mongodb://127.0.0.1:27017/"+database;

async function connectdb(){
  await connect(uri);
}
connectdb().then(()=>{console.log("database connect sucessfully..!")}).catch((err)=>{console.log("db connection failed..!",err)})

const userSchema = new schema({
  username:{type:String},
  password:{type:String},
  email:{type:String},
  address:[
    {
      street:{type:String},locality:{type:String},state:{type:String},country:{type:String},pincode:{type:String} //, _id:false //no id for this array
    }
  ]
});

const User= model("User",userSchema);
User.deleteMany({}).then((r)=>{console.log(r)});
User.insertMany(users).then((r)=>{console.log(r)});;


//orders schema---------------------------
const orderSchema = new schema({
  item:{type:String},
  quantity:{type:Number},
  price:{type:Number},
  seller:{type:String},
  purchaseDate:{type:Date},
  deliveryDate:{type:Date}
})

const Order = model("Order",orderSchema);
Order.deleteMany({}).then((r)=>{console.log(r)});
Order.insertMany(orders).then((r)=>{console.log(r)});;




