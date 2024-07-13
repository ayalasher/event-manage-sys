import express from 'express'
import mongoos from './mongoose/mongoconnection.mjs'


import cors from 'cors'
 
const app = express() ; 
app.use(express.json())

app.use(cors())

const PORT = process.env.PORT || 3000 

app.get('/',(req,res)=>{
    res.send('Hello World from express')
})

console.log('Event management system backend');


app.listen(PORT,()=>{
    console.log(`The server is running on PORT ${PORT}`);
})