import  Passport from "passport";
import { Strategy } from "passport-local";
// sessions is used with auth
import usermodel from '../schemas/Schema.mjs'


Passport.serializeUser((user,done)=>{
    console.log(`Inside serialize user`);
    console.log(user);
    done(null,user.id)
})

Passport.deserializeUser( async (id,done)=>{
    console.log(`Inside deserialize user`)
    console.log(`Deserializing the user by the id:${id}`);

    try {
        const finduser = await usermodel.findById(id) ;
        if(!finduser) throw new Error("User not found !!")
        done(null,finduser)
    } catch (error) {
       done(error,null) 
    }

})


export default Passport.use({
    new :Strategy( async (username,userpassword,done)=>{
        console.log(`username:${username}`);
        console.log(`userpassword:${userpassword}`);

        try {
            const finduser = await  usermodel.findOne({username})
            if(!username) throw new Error("user not found !!")
            if(finduser.userpassword!== userpassword) throw new Error("invalid password !!")   
                done(null,finduser)
        } catch (error) {
            done(error,null)
        }

       
    }) 
})