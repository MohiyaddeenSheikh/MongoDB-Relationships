const mongoose = require("mongoose");
const {postData} = require("../init/data");
const User = require("./users");

const connect = mongoose.connect;
const schema = mongoose.Schema;
const model = mongoose.model;
database = "relation1";
uri = "mongodb://127.0.0.1:27017/"+database;

async function connectdb(){
  await connect(uri);
}
connectdb().then(()=>{console.log("database connect sucessfully..!")}).catch((err)=>{console.log("db connection failed..!",err)});

const postSchema = new schema({
  heading:{type:String},
  content:{type:String},
  likes:{type:Number},
  user:{type:schema.Types.ObjectId,ref:"User"}
})

const Post = model("Post",postSchema);


async function addPost(){
  const tupple1 = await new Post({
    heading:postData[1].heading,
    content:postData[1].content,
    likes:postData[1].likes,
  });
  tupple1.user = await User.findOne({username:"user12"});
tupple1.save();
}
//addPost();

async function getPostdata(){
  const result = await Post.find({}).populate('user','username');
  console.log(result)
}
getPostdata()



