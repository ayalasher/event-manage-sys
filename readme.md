This is going to be an event management system
It is a learning through projects process

frontend techologies
-react
-css
-javascript
-axios


backend technologies
-nodejs
-express
-mongodb
-mongoose
-cors

Version control
-Git
-Github



Things I will learning as i do this project
1.user creation and autheticaction-ADM,NORM
2.managing state of being logged in or out
3.design the system architecture of an application
4.managing the state of an admin or a normal user
5.manage being logged in or logged out

The features if the system are going to include
-registration and authentication-admin,users
-Event creation-admin
-profile management-dashboard feature
-A list of all events
-registration for the event and payment-mpesa daraja
-dashboard for events-payed and marked

ROLES OF AN ADMIN
-creating and posting events and the respective details
-managing the number of people who have registered and payed for events
-Total payments(management) for the event


ROLES OF USER
-Has a list of available events
-registers for events
-pays for events



-Mongodb
--ID'S are automatically done by mongodb 
<!-- The name of the documents is going to come with the schema -->
-events document for events details-admin will be the data creator
1.event name and id-string--done
2.event organisers-string--done
3.event price-number--done
4.event venue-string--done
5.event time-string--done
6.event date-string--done
7.number of bookings-count should be done as every user books and pays--done through the virtual
8.number of booking * event price---totalrevenue--done through virtual
9.created at(date and time)--done
 
-users document-data will be created during user registration
1.user name-string --done
2.user email-string--done
3.booked events-??--done
4.marked events-??--done
5.user password--done


-admin document-data will be created using admin registration
1.admin name-done
2.admin email-done
3.events list--done
4.number of booking per event -count function (users)--done through virtual--will get it from number 3
5.total payments made per event--Will get it from number 3
6.admin password


NB-react kight and dark mode project
1.The program should be cross platform and have dark and light mode

-Controllers
1.POST event details-admin creates events
2.POST users  details-users registration
3.POST Admin details-Admin registration
4.GET events  - users get the event list and details posted by the admin
5.PUT events details - section numberofbookings and totalrevenue of the event document are going to be changed
6.GET events details ADMIN - An admin will get the details of events after creation of events and the total number number of bookings 
7.DELETE an event ... The admin can delete an event.. the users who had boked are going to be notified of the deletion.... Thsi feature is going to be added later on after project completion....For starters the event is going to disappear from the events list     
8.PUT...The events details are going to be modified by the admin---users who booked the event wont get a notification ... notification feature going to be done later
9.book event---The user is goinng to send its ID to the attendes section in the events collection

10.autheniticate a user-GET
11.autheniticate an admin-GET

-Backend Routes(should be according the steps in the "Controllers" section above )



