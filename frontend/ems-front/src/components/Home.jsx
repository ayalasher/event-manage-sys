import { Link } from "react-router-dom";
import styles from "./styles.module.css"

export default function Home() {
    return <div>
        <h3></h3>
        {/* <Link to={'/'} >Home</Link> */}
        <div className={styles.trial} >
        <Link className={styles.lsbuttonstxt}  to={'/login'} >Login</Link>
        <Link className={styles.lsbuttonstxt} to={'/Signup'} >Signup </Link>
        </div>
       
        
        {/* Will come back to this and see how to fix it */}
        {/* <Link to={'Asll'} >Asll</Link> */}
    </div>
}