// schema definitions and conversion to models

import mongoose from "mongoose";

// import { Schema } from "mongoose";

// users schema
const user = new mongoose.Schema({
    username:{
        type: String,
        required:true ,
        unique:true
    },

    useremail:{
        type:String,
        required:true,
        unique:true
    },
    userpassword:{
        type:String,
        required:true
    },
    bookedevents:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'event'
    }], 
    markedevents:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'event'
    }]
})

// admins schema

const admin = new mongoose.Schema({
    adminname:{
        type:String , 
        unique:true
    },

    adminemail:{
        type:String
    },
    eventlist:[{
        // the evnts will be listed by their ID's
        type: mongoose.Schema.Types.ObjectId , 
        ref:'event'
    }],
    adminpassword:{
        type:String ,
        required:true
    }
})

const event = new mongoose.Schema({
    eventname:{
        type:String
    },
    eventorganiser:{
        type:String
    },
    eventprice:{
        type:Number
    },
    eventvenue:{
        type:String
    },
    eventdate:{
        type:Date ,
        required:true
    } ,
    attendes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    }],
    createdAt:{
        type:Date,
        default:Date.now
    },
    eventTime:{
        type:Date,
        required:true
    }
})
// virtual number of bookings 
event.virtual('numberofbookings').get(function () {
    return this.attendes.length ; 
})

event.virtual('totalrevenue').get(function () {
    return this.eventprice * this.numberofbookings
})

// converting the schemas to models
const Eventmodel = mongoose.model('Event',event) ;

const usermodel = mongoose.model('user',user)

const adminmodel = mongoose.model('admin',admin)

 

export {Eventmodel,usermodel,adminmodel} ;

export default usermodel