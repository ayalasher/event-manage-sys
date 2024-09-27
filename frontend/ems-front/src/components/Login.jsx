import styles from './styles.module.css'
import {Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';



export default function Signup() {
    const [name,setName]  = useState("")
    const [password, setpassword] = useState("")
    const handlelogin = ()=>{
        axios.post("http;//localhost:3000/evenmg/authuser/",{
            "username":name,
            "userpassword":password
        }).then((Response)=>{
            console.log(Response);
            
        }).catch((err)=>{
            console.log(err);
        })
        
    }
    return <div>
        <form onSubmit={handlelogin} className={styles.form} >
            <fieldset className={styles.fset} >
                <input className={styles.input} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter name" />
                <br />
                <input onChange={(e)=>setpassword(e.target.value)} className={styles.input} type="password" placeholder="Enter password" />
                <br />
                <button type='submit' onClick={handlelogin} className={styles.btn} > log In  </button>
                <br />
                <p className={styles.ptxt} > Have no account ? <Link to={'/signup'} ><button className={styles.lsbtn} >sign up</button></Link> </p>
            </fieldset>
        </form>
    </div>
}