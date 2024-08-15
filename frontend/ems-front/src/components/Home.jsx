import { Link } from "react-router-dom";

export default function Home() {
    return <div>
        <h3>At home page</h3>
        <Link to={'/'} >Home</Link>
        <Link to={'/login'} >Login</Link>
        <Link to={'/Signup'} >Signup </Link>
        <Link to={'Asll'} >Asll</Link>
    </div>
}