import { Link } from "react-router-dom";
import styles from "./styles.module.css"

export default function Home() {
    return <div>
        {/* <Link to={'/'} >Home</Link> */}
        <p className={styles.h2} >Welcome to Destiny events app . Your Ultimate Events related app</p>
        <div className={styles.linkcontainer}  >
            <Link className={styles.lsbuttonstxt1}  to={'/login'} >Login</Link>
            <Link className={styles.lsbuttonstxt2} to={'/Signup'} >Signup </Link>
        </div>
        
       
        
        {/* Will come back to this and see how to fix it */}
        {/* <Link to={'Asll'} >Asll</Link> */}
    </div>
}