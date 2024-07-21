import express from 'express'

const approuter = express.Router()

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