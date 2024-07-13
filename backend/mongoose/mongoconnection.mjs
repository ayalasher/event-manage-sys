import mongoose from "mongoose";

const mongoos =   mongoose.connect('mongodb://localhost:27017/e_management').then(()=>{
    console.log("connected to the event-management database");
}).catch((err)=>{
    console.log(err);
})

export default mongoos ; 