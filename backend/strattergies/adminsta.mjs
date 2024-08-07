import Passport from "passport";
import Strategy from "passport-local";
import adminmodel from '../schemas/Schema.mjs'
import { comparepassword } from "../hashing/Helper.mjs";



Passport.serializeUser((user,done)=>{
    console.log(`inside serialize user`);
    console.log(user);
    done(null,user.id)
})

Passport.deserializeUser(async(id,done)=>{
    console.log(`Inside deserialize user`);
    console.log(`deserializing the user using the ID :${id} `);
    try {
      const findadmin = await adminmodel.findById(id)  
      if(!findadmin) throw new Error("User not found")
        done(null,findadmin)
    } catch (error) {
        done(error,null)
    }
})

  
export default  Passport.use(
    new Strategy( async (adminname,adminpassword,done)=>{
        console.log(`adminname:${adminname}`);
        console.log(`adminpassword:${adminpassword}`);

        try {
            const findadmin = await adminmodel.findOne({adminname})
            if(!adminname) throw new Error("Admin not found")
            if(comparepassword(adminpassword,findadmin.adminpassword)) throw new Error("Invalid password")
            done(null,findadmin)
        } catch (error) {
           done(error,null) 
        }
    })
)