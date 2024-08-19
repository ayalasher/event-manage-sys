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

        <p className={styles.services} >Our services</p>

        <div className={styles.midcontainer} >
           
            <div className={styles.servicecontainer} >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui esse delectus consectetur unde obcaecati vero amet necessitatibus laboriosam aut deserunt ipsam eum officiis, eos perspiciatis dolore nisi maiores dicta voluptate ad. Qui ab facere placeat libero, minima rem velit, quibusdam quaerat consectetur, laborum doloribus quidem? Illo earum mollitia magnam veniam cumque repellendus voluptatibus a aspernatur eveniet, nostrum laboriosam saepe ipsa molestiae. Expedita ducimus modi provident dignissimos reiciendis nihil sunt earum possimus architecto autem suscipit saepe, libero laudantium asperiores unde illum quaerat temporibus tempore eius tempora? Tempore maiores magnam repellendus tempora velit adipisci sapiente non ex repudiandae. Cum magni omnis velit!
            </div>
            <div className={styles.servicecontainer} >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui esse delectus consectetur unde obcaecati vero amet necessitatibus laboriosam aut deserunt ipsam eum officiis, eos perspiciatis dolore nisi maiores dicta voluptate ad. Qui ab facere placeat libero, minima rem velit, quibusdam quaerat consectetur, laborum doloribus quidem? Illo earum mollitia magnam veniam cumque repellendus voluptatibus a aspernatur eveniet, nostrum laboriosam saepe ipsa molestiae. Expedita ducimus modi provident dignissimos reiciendis nihil sunt earum possimus architecto autem suscipit saepe, libero laudantium asperiores unde illum quaerat temporibus tempore eius tempora? Tempore maiores magnam repellendus tempora velit adipisci sapiente non ex repudiandae. Cum magni omnis velit!
            </div>

        </div>
        
       
        
        {/* Will come back to this and see how to fix it */}
        {/* <Link to={'Asll'} >Asll</Link> */}
    </div>
}