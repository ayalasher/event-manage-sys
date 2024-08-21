import styles from './styles.module.css'
import {Link } from 'react-router-dom'
export default function Signup() {
    const handlesign = ()=>{

    }
    return <div>
        <form className={styles.form} >
            <fieldset className={styles.fset} >
            <input className={styles.input} type="text" placeholder="Enter name" />
                <br />
                <input className={styles.input} type="password" placeholder="Enter password" />
                <br />
                <button onClick={handlesign} className={styles.btn} > log In  </button>
                <br />
                <p className={styles.ptxt} > Have no account ? <Link to={'/signup'} ><button className={styles.lsbtn} >sign up</button></Link> </p>
            </fieldset>
        </form>
    </div>
}