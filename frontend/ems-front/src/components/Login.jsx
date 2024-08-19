import { Link } from 'react-router-dom'
import styles from './styles.module.css'

export default function Login() {
    function handlelog() {
        return
    }
    return <div>
        <h3>Login page</h3>
        <form className={styles.form} >
            <fieldset className={styles.fset}  >
                <input className={styles.input} type="text" placeholder="Enter your name" />
                <br />
                <input className={styles.input} type="password" placeholder="Enter your password" />
                <br />
                <button onClick={handlelog} className={styles.btn} > log In  </button>
                <br />
                <p className={styles.ptxt} > Have no account ? <Link to={'/signup'} ><button className={styles.lsbtn} >sign up</button></Link> </p>
            </fieldset>
        </form>
    </div>
}