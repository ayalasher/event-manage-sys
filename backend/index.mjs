import express from 'express'
import mongoos from './mongoose/mongoconnection.mjs'
import approuter from './routes/Systemroutes.mjs';

import cors from 'cors'
 
const app = express() ; 
app.use(express.json())

app.use(cors())

const PORT = process.env.PORT || 3000 

app.get('/',(req,res)=>{

     // cookies backend learning session
    // setting up a cookie
    // maxAge is measured in milliseconds
    res.cookie('cookie1','Hello',{maxAge:60000*60})

    res.send("The event management system")
   
})

app.use('/eventmng',approuter)

console.log('Event management system backend');


app.listen(PORT,()=>{
    console.log(`The server is running on PORT ${PORT}`);
})