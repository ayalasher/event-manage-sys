import { Link } from 'react-router-dom'
import styles from './styles.module.css'

export default function Login() {
    function handlelog() {
        return
    }
    return <div>
        {/* <h3>Login page</h3> */}
        <form className={styles.form} >
            <fieldset className={styles.fset}  >
                <input className={styles.input} type="text" placeholder="Enter name" />
                <br />
                <input className={styles.input} type="text" placeholder="Enter email" />
                <br />
                <input className={styles.input} type="password" placeholder="Enter password" />
                <br />
                <button onClick={handlelog} className={styles.btn} >sign up</button>
                <br />
                <p className={styles.ptxt} > Have an account ? <Link to={'/login'} ><button className={styles.lsbtn} >login</button></Link> </p>
            </fieldset>
        </form>
    </div>
}