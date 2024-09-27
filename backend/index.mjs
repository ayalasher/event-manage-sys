import express from 'express'
import mongoos from './mongoose/mongoconnection.mjs'
import approuter from './routes/Systemroutes.mjs';
import cors from 'cors'
import session from 'express-session';
 
const app = express() ; 
app.use(express.json())
app.use(cors())
// session is for learning
app.use(session({
    secret:"fssystem",
    saveUninitialized:false,
    resave:false,
    cookie :{
        maxAge:60000*1000*1000
    }
}))



const PORT = process.env.PORT || 3000 



app.get('/',(req,res)=>{

    //  sessions , passportJS ,databases , hashing,  session-stores
    res.cookie('cookie1','Hello',{maxAge:60000*60})
    console.log(req.session);
    console.log(req.session.id);
    req.session.visited = true ; 
    res.send("The event management system")
   
})

app.use('/evenmg',approuter)
console.log('Event management system backend');


app.listen(PORT,()=>{
    console.log(`The server is running on PORT ${PORT}`);
})