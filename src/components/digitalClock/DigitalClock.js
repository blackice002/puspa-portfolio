import React,{useState, useEffect} from 'react';
import './clock.css'

const DigitalClock = () => {


 const currentTime = new Date().toLocaleTimeString();
const [timeNow, setTimeNow] = useState(currentTime)
// get day
 const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const getDate = new Date()

const today = days[getDate.getDay()]

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const month = monthNames[getDate.getMonth()]

useEffect(() => {
const timeChange = setInterval(()=>setTimmer(), 1000)
 return ()=> clearInterval(timeChange)
}, [])


const setTimmer = () =>{
    const newTime = new Date().toLocaleTimeString();
    setTimeNow(newTime)
}
    return (
        <div className="clock">
            <p>{timeNow} </p> 
            <p>{` ${month} -${getDate.getDate()}, ${getDate.getFullYear() }, ${today} ` }</p> 
        </div>
    )
}

export default DigitalClock
