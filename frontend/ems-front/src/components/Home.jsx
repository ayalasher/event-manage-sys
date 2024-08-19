import { Link } from "react-router-dom";
import styles from "./styles.module.css"
import booking from '../Images/download.jpg'
import reserve from '../Images/resrerve.webp'
import spay from '../Images/payment.png'
export default function Home() {
    return <div>
        {/* <Link to={'/'} >Home</Link> */}
        <p className={styles.h2} >Welcome to Destiny events app . Your Ultimate Events related app</p>
        <div className={styles.linkcontainer}  >
            <Link className={styles.lsbuttonstxt1}  to={'/login'} >Login</Link>
            <Link className={styles.lsbuttonstxt2} to={'/Signup'} >Signup </Link>
        </div>

        <p className={styles.services} >Our services</p>

        <div className={styles.midcontainer} >
           <div className={styles.midcontainer1} >
           <div className={styles.servicecontainer} >
                <img src={booking} alt="booking" title="booking" className={styles.image}  />
                <p className={styles.imgtxt} >Book your events in time and get your tcket generated as soon as possible</p>
            </div>
            <div className={styles.servicecontainer} >
                <img src={spay} alt="payment" title="payment" className={styles.image}  />
                <p className={styles.imgtxt} >Secure payment solutions to the event organisers . Refunds available incase of event cancelattion </p>
            </div>  

            <div className={styles.servicecontainer} >
                <img src={reserve} alt="reserve" title="reserve" className={styles.image} />
                <p className={styles.imgtxt} >Reserve A slot in the event and come to pay and book if not sure with your availability</p>
            </div>
           </div>

           <div className={styles.midcontainer1} >
           <div className={styles.servicecontainer} >
                <img src={booking} alt="booking" title="booking" className={styles.image}  />
                <p className={styles.imgtxt} >Book your events in time and get your tcket generated as soon as possible</p>
            </div>
            <div className={styles.servicecontainer} >
                <img src={spay} alt="payment" title="payment" className={styles.image}  />
                <p className={styles.imgtxt} >Secure payment solutions to the event organisers . Refunds available incase of event cancelattion </p>
            </div>  

            <div className={styles.servicecontainer} >
                <img src={reserve} alt="reserve" title="reserve" className={styles.image} />
                <p className={styles.imgtxt} >Reserve A slot in the event and come to pay and book if not sure with your availability</p>
            </div>
           </div>
          

        </div>
        
       
        
        {/* Will come back to this and see how to fix it */}
        {/* <Link to={'Asll'} >Asll</Link> */}
    </div>
}