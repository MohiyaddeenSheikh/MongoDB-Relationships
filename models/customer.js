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

//customers schema --------------
const customerSchema = new schema({
  name:{type:String},
  orders:[{
    type:schema.Types.ObjectId,
    ref:"Order",
  }]
})
const Customer = model("Customer",customerSchema)

async function addCustomer(){
  const tupple1 = await new Customer({
    name:"Moin"
  });

  //gave orders
  const order1 = await Order.findOne({item:'Webcam'});
  const order2 = await Order.findOne({item:'Wireless Earbuds'});
  //console.log(order2)
  //push them in moin tupple
  await tupple1.orders.push(order1);
  await tupple1.orders.push(order2);
  //save
  tupple1.save()

}

//addCustomer()

async function getCustomerdata(){
  const result = await Customer.find({}).populate("orders");
  console.log(result[0])
}
getCustomerdata()



