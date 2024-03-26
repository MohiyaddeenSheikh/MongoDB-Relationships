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
module.exports = User

//------------ one to few Relationship -------------------------
//sample insertion
/* const tupple1 = new User(
  {
    username: "moin",
    password: "123",
    email: "moin@example.com",
    address: [
        {
            street: "101 Maple Street",
            locality: "Shivajinagar",
            state: "Noida",
            country: "India",
            pincode: "560051"
        }
    ]
}
)
tupple1.save(); */