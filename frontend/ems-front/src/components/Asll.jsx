import { useState, useEffect } from "react"
import axios from "axios"

export default function Asll() {
    const [events, setEvents] = useState([])
    const [loading , setoading] = useState(true)

    useEffect(()=>{
        axios.get("http://localhost:3000/evenmg/eventlist/").then((response)=>{
            console.log(response.data);
            setEvents(response.data)
            setoading(false)
        }).catch((err)=>{
            console.log(err);
            setoading(true)
        })
    },[])

    return <div>
        <div>
            {
                loading ? <p>Items loading</p> : events.map((event)=><p> {event.eventname} {event.eventprice} </p>  )
            }
        </div>
    </div>
}