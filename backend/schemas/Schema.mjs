// schema definitions and conversion to models

import mongoose from "mongoose";

// import { Schema } from "mongoose";

// users schema
const user = new mongoose.Schema({
    username:{
        type:String,
        required:true
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
        ref: 'Event'
    }], 
    markedevents:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    }]
})

// admins schema

const admin = new mongoose.Schema({
    adminname:{
        type:String
    },

    adminemail:{
        type:String
    },
    eventlist:[{
        // the evnts will be listed by their ID's
        type: mongoose.Schema.Types.ObjectId
    }],
    adminpassword:{
        type:String
    },
    eventslist:[{
        type: mongoose.Schema.Types.ObjectId
    }]
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

module.exports = {Eventmodel,usermodel,adminmodel} ; 