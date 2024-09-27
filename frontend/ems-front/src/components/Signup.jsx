import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { useState  } from 'react';
import axios  from 'axios'





export default function Login() {

    const [name, setName] =  useState("")
    const [email , setEmail ] =  useState("")
    const [password, setPassword] =  useState("")

    let handlesinup = ()=> {
        
        axios.post("http://localhost:3000/evenmg/adduser/",{
            "username":name,
            "useremail":email,
            "userpassword":password

        }).then((Response)=>{
            console.log(Response.data);
        }).catch((err)=>{
            console.log(err);
        })
    }
    return <div>
        {/* <h3>Login page</h3> */}
        <form onSubmit={handlesinup} className={styles.form} >
            <fieldset className={styles.fset}  >
                <input className={styles.input} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter name" />
                <br />
                <input className={styles.input} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter email" />
                <br />
                <input className={styles.input} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter password" />
                <br />
                <button onClick={handlesinup} type='submit' className={styles.btn} >sign up</button>
                <br />
                <p className={styles.ptxt} > Have an account ? <Link to={'/login'} ><button className={styles.lsbtn} >login</button></Link> </p>
            </fieldset>
        </form>
    </div>
}