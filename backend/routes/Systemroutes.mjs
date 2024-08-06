import express from 'express'

import passport from 'passport'

import session from 'express-session'

import cookieParser from 'cookie-parser'



const app = express()
app.use(express.json())

app.use(cookieParser("Keyboard cat"))

const approuter = express.Router()
app.use(session({
    secret: 'keyboard cat',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge: 60000*1000*1000*1000
    }
}))

app.use(passport.initialize())
app.use(passport.session())

import { addevent,adduser,addadmin,fetcheventslist,fetcheventslistadmin,userbooking,deleteadmin,updateevent,deleteevent,deleteuser } from '../controllers/controller.mjs'

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
approuter.post('/auth-user',passport.authenticate("local"),(req,res)=>{
    res.sendStatus(200).send({message:"authentication succesful"})
    console.log("authentication succesful");
    console.log(req.user);
})

approuter.post('/auth-admin',passport.authenticate("local"),(req,res)=>{
    res.sendStatus(200).send({message:"authentication succesful "})
    console.log(req.admin);
})