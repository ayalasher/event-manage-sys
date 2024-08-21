import mongoose from "mongoose";

const mongoos =   mongoose.connect('mongodb://localhost:27017/e_management',{
//     useNewUrlParser: true,
//   useUnifiedTopology: true,
  // Do not attempt to start a session for a transaction unless it's a replica set
//   replicaSet: 'rs0' // Make sure your connection string matches your setup
}).then(()=>{
    console.log("connected to the event-management database");
}).catch((err)=>{
    console.log(err);
})

export default mongoos ; 