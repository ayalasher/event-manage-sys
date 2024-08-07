import express, { response } from 'express'
import passport from 'passport'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import '../strattergies/usersta.mjs'
import '../strattergies/adminsta.mjs'
import MongoStore from 'connect-mongo'
import mongoose from 'mongoose'

const app = express()
app.use(express.json())
app.use(cookieParser("fsystem"))

const approuter = express.Router()
app.use(session({
    secret: 'fsystem',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge: 60000*1000*1000
    },
    store: MongoStore.create({
        client:mongoose.connection.getClient()
    })
}))

app.use(passport.initialize())
app.use(passport.session())

import { addevent,adduser,addadmin,fetcheventslist,fetcheventslistadmin,userbooking,deleteadmin,updateevent,deleteevent,deleteuser } from '../controllers/controller.mjs'
import mongoose from 'mongoose'

approuter.post('/addevent',addevent) ; 

approuter.post('/adduser',adduser) ; 

approuter.post('/addadmin',addadmin) ; 

approuter.get('/eventlist',fetcheventslist) ;

approuter.get('/eventlistadmin',fetcheventslistadmin) ; 

approuter.post('/userbooking',userbooking) 

approuter.delete('/deleteadmin',deleteadmin); 

approuter.put('/updateevent',updateevent)

approuter.delete('/deleteevent',deleteevent)

approuter.delete('/deleteuser',deleteuser) ; 

approuter.post('/authuser',)

// import schema into stratergies and make it work there
// make up the stratergy
approuter.post('/authuser',passport.authenticate("local"),(req,res)=>{
    res.sendStatus(200).send({message:"authentication succesful"})
    console.log("authentication succesful");
    console.log(req.user);
    req.session.user = finduser ;
    return req.session.user ? res.status(200).json({message:"USER FOUND !!"}) : res.status(404).json({message:"USER NOT FOUND !!"})

})

approuter.post('/authadmin',passport.authenticate("local"),(req,res)=>{
    res.sendStatus(200).send({message:"authentication succesful "})
    console.log(req.admin);
    req.session.admin = findadmin ;
    return req.session.admin ? res.status(200).json({message:"ADMIN FOUND !!"}) : res.status(404).json({message:"ADMIN NOT FOUND"})

})

approuter.get('/authuser/status',(req,res)=>{
    console.log(req.session);
    console.log(req.user);
    
    return req.session.user ? res.status(200).json({message:"USER FOUND !!"}) : res.status(404).json({message:"USER NOT FOUND !!"})
})

approuter.get('/authadmin/status ',(req,res)=>{
    console.log(req.session);
    console.log(req.admin);
    
    
    return req.session.admin ? res.status(200).json({message:"ADMIN FOUND !!"}) : res.status(404).json({message:"ADMIN NOT FOUND"})
})

approuter.post('/authuser/logout',(req,res)=>{
    if(!req.user) return res.sendStatus(401)
    req.logout((err)=>{
    if(err) return res.sendStatus(400)
        
    })
    res.sendStatus(200)
})

approuter.post('/authadmin/logout',(req,res)=>{
    if(!req.admin) return res.sendStatus(401)
    req.logout((err)=>{
    if(err) return res.sendStatus(400)
})
    res.send(200)
})


export default approuter ; 