//  9 , 5 , 6 ...... 10 , 11

// controllers for the application
import { Eventmodel,usermodel,adminmodel } from '../schemas/Schema.mjs';
import mongoose  from 'mongoose';
import  hashpassword  from '../hashing/Helper.mjs';

import express from 'express';


const app = express()

app.use(express.json())

// import { hashpassword } from '../hashing/Helper.mjs';
// -Controllers
// 1.POST event details-admin creates events
const addevent = async(req,res)=>{
    const {eventname,eventorganiser,eventprice,eventvenue,eventdate,attendes,createdAt,eventTime} =  req.body ;

   const edate = Date.parse(eventdate)
   const etime = Date.parse(eventTime)

    // time-stamp for when the event is created
    const currentdate = new Date() ;
    console.log(currentdate);
    console.log(currentdate.getHours());
    console.log(currentdate.getMinutes());
    
    

    // if (new Date(edate<currentdate||new Date(etime)< currentdate )) {
    //    return res.status(400).json({message:"Event date and time must be of the future !!! "})
    // }

    const newevent = new Eventmodel({
       eventname,
       eventorganiser,
       eventprice,
       eventvenue,
       eventdate:edate , 
       attendes,
       createdAt,
       eventTime:etime

    })

    const session = await mongoose.startSession()
    session.startTransaction()

    try {
        await newevent.save(session)
        session.commitTransaction()
        session.endSession()
      return  res.status(200).json({newevent})
    } catch (error) {
        if (session) {
            session.abortTransaction();
            session.endSession()
        }
      return  res.status(500).json({message:error})
    }
}


// 2.POST users  details-users registration
const adduser = async(req,res)=>{


    const {username,useremail,userpassword,bookedevents,markedevents} = req.body ;  
    const up = hashpassword(userpassword)
    const newuser = new usermodel({
        username,
        useremail,
        userpassword:up,
        bookedevents : bookedevents || [] ,
        markedevents : markedevents || []
    })
    // start session
    const session = await mongoose.startSession() ; 
    // start transaction
    session.startTransaction()


    try {
        

        // saving
        await newuser.save(session) 

        //Updating booked to reference this user
        if (bookedevents&&bookedevents.length> 0) {
            await Eventmodel.updateMany(
                {_id:{$in:bookedevents}},
                {$addtoset:{attendes:newuser._id}},
                {session}
            )
        }

        // updating marked events to reference this user
        if (markedevents&&markedevents.length >0 ) {
            await Eventmodel.updateMany(
                {_id:{$in:markedevents}},
                {$addtoset:{markedby:newuser._id}}
            )
        }

        await session.commitTransaction(); 
        session.endSession()

     return   res.status(200).json(newuser) ; 
    } catch (error) {
        if (session) {
            await session.abortTransaction();
            session.endSession()
        }
       return res.status(500).json({message:error}) 
    }
}



// 3.POST Admin details-Admin registration

const addadmin = async(req,res)=>{
    const {adminname,adminemail,adminpassword,eventlist} = req.body ; 
    const ap = hashpassword(adminpassword)
    const newadmin = new adminmodel({
        adminname,
        adminemail,
        adminpassword:ap,
        eventlist : eventlist || []
    })
    const session = await mongoose.startSession();
    session.startTransaction() ; 

    try {
        await newadmin.save(session)
        await session.commitTransaction()
        session.endSession()
       return res.status(200).json({newadmin})
    } catch (error) {
        if (session) {
            await session.abortTransaction()
            session.endSession()
        }
       return res.status(500).json({message:error})
    }


}


// 4.GET events  - users get the event list and details posted by the admin
const fetcheventslist = async(req,res)=>{
    let eventslist ; 

    try {
        eventslist = await Eventmodel.find();
    } catch (error) {
        console.log(error);
    }
    if (!eventslist) {
        return res.status(404).json({message:"No events found"})
    }
    return res.status(200).json({eventslist})
}


// See the code snippets below
// 5.PUT events details - section numberofbookings and totalrevenue of the event document are going to be updated
// 5 is tied to 9
// 6.GET events details ADMIN--done - An admin will get the details of events after creation of events and the total number number of bookings 

const fetcheventslistadmin = async(req,res)=>{

    Eventmodel.findById(_id)
  .populate('attendees')
  .exec((err, event) => {
    if (err) {
      console.error('Error finding event:', err);
    } else {
      console.log('Number of bookings:', event.numberOfBookings);
      console.log('Total revenue:', event.totalRevenue);
    }
  });


    let eventslist ; 

    try {
        eventslist = await Eventmodel.find(); 
    } catch (error) {
        console.log(error);
    }
    if (!eventslist) {
        return res.status(404).json({message:"No events found"})
    }
    return res.status(200).json({eventslist})
}


// number of bookings and total revenue is take care of
const userbooking = async(req,res)=>{
// Assume userId and eventId are available
Event.findById(_id, (err, event) => {
  if (err) {
    console.error('Error finding event:', err);
  } else {
    event.attendees.push(usermodel._id);
    event.save((err) => {
      if (err) {
        console.error('Error saving event:', err);
      } else {
        console.log('User added to event successfully!');
        console.log('Number of bookings:', event.numberOfBookings); // This will be updated
        console.log('Total revenue:', event.totalRevenue); // This will be updated
      }
    });
  }
});
}



// const Event = require('./models/Event');
// const User = require('./models/User');






// 7.DELETE an event ... The admin can delete an event.. the users who had boked are going to be notified of the deletion.... This feature is going to be added later on after project completion....For starters the event is going to disappear from the events list  
const deleteevent = async(req,res)=>{
    const id = req.params.id ; 
    try {
        const currentevent = await Eventmodel.findByIdAndDelete(id);
        if (!currentevent) {
            return res.status(404).json({message:"could not delete event !!"})
        }
        return res(200).json({message:"Event deleted succesfully !!"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"could not delete event !!"})
    }
}   
// 8.PUT...The events details are going to be modified by the admin---users who booked the event wont get a notification ... notification feature going to be done later
const updateevent = async(req,res)=>{ 
    const id = req.params.id ; 

    const {eventname,eventorganiser,eventprice,eventvenue,eventdate,eventtime,createdAt} = req.body ; 

    let eventtoupdate ; 
    
    try {
        eventtoupdate = await Eventmodel.findByIdAndUpdate(id,{
            eventname,eventorganiser,eventprice,eventvenue,eventdate,eventtime,createdAt
        })
    } catch (error) {
       console.log(error); 
       return res.status(500).json({message:"cannot update the blog !!"})
    }
    if (!eventtoupdate) {
        return res.status(500).json({message:"unable to update event details !!"})
    }

    return res.status(200).json({eventtoupdate})

}

// done in 5
// 9.PUT book event---The user is goinng to send its ID to the attendes section in the events collection
// Taken care of under the virtual activity


// process to be done in the routes page
// 10.autheniticate a user-POST
// 11.autheniticate an admin-POST

// checking authentication status user

// checking authentication status admin


//12. DELETE an admin account
const deleteadmin = async(req,res)=>{
    const id = req.params.id ; 

    try {
        const findcurrentadmin = await adminmodel.findByIdAndDelete(id) ; 
        if (!findcurrentadmin) {
         return   res.status(404).json({message:"admin not found"})
        }
        return res.status(200).json({message:"admin has been deleted !!"})
    } catch (error) {
        console.log(error);
      return  res.status(500).json({message:"Failed to delete admin account"})
    }
}

// 13.Delete a user accout
const deleteuser = async(req,res)=>{
    const id = req.params.id ; 
    try {
        const currentuser = await usermodel.findByIdAndDelete(id)
        if (!currentuser) {
            return res.status(404).json({message:"user not found !!"})
        }
        return res.status(200).json({message:"The user has been deleted!"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"failed to delete the user"})
    }
}


export {addevent,adduser,addadmin,fetcheventslist,fetcheventslistadmin,userbooking,deleteevent,updateevent,deleteadmin,deleteuser}